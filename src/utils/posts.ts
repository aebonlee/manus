import getSupabase from './supabase';
import site from '../config/site';

const POSTS_TABLE = `${site.dbPrefix}posts`;
const COMMENTS_TABLE = `${site.dbPrefix}comments`;

export interface Post {
  id: number;
  author_id: string;
  author_name: string;
  category: string;
  title: string;
  content: string;
  view_count: number;
  comment_count: number;
  created_at: string;
  comments?: Comment[];
}

export interface Comment {
  id: number;
  post_id: number;
  author_id: string;
  author_name: string;
  body: string;
  created_at: string;
}

interface GetPostsOptions {
  category?: string;
  search?: string;
  limit?: number;
}

interface CreatePostOptions {
  category: string;
  title: string;
  content: string;
  authorId: string;
  authorName: string;
}

interface CreateCommentOptions {
  postId: number;
  body: string;
  authorId: string;
  authorName: string;
}

export async function getPosts({ category, search, limit }: GetPostsOptions = {}): Promise<Post[]> {
  const client = getSupabase();
  if (!client) return [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let query = (client
    .from(POSTS_TABLE)
    .select(`*, comment_count:${COMMENTS_TABLE}(count)`) as any)
    .order('created_at', { ascending: false });

  if (category && category !== 'all') {
    query = query.eq('category', category);
  }

  if (search && search.trim()) {
    const q = search.trim();
    query = query.or(`title.ilike.%${q}%,author_name.ilike.%${q}%`);
  }

  if (limit) {
    query = query.limit(limit);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data, error } = await query as { data: any[] | null; error: any };
  if (error) throw error;

  return (data || []).map((post: Record<string, unknown>) => ({
    ...post,
    comment_count: Array.isArray(post.comment_count) ? (post.comment_count[0] as Record<string, number>)?.count ?? 0 : 0,
  })) as Post[];
}

export async function getPostById(id: string | undefined): Promise<Post> {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  try {
    await client.rpc(`${site.dbPrefix}increment_view_count`, { post_id: Number(id) });
  } catch {
    // view count increment is non-critical
  }

  const { data: post, error } = await client
    .from(POSTS_TABLE)
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;

  const { data: comments } = await client
    .from(COMMENTS_TABLE)
    .select('*')
    .eq('post_id', id)
    .order('created_at', { ascending: true });

  return { ...post, comments: comments || [] } as Post;
}

export async function createPost({ category, title, content, authorId, authorName }: CreatePostOptions): Promise<Post> {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { data, error } = await client
    .from(POSTS_TABLE)
    .insert({
      author_id: authorId,
      author_name: authorName,
      category,
      title,
      content,
    })
    .select()
    .single();

  if (error) throw error;
  return data as Post;
}

export async function deletePost(id: number): Promise<void> {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { error } = await client.from(POSTS_TABLE).delete().eq('id', id);
  if (error) throw error;
}

export async function createComment({ postId, body, authorId, authorName }: CreateCommentOptions): Promise<Comment> {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { data, error } = await client
    .from(COMMENTS_TABLE)
    .insert({
      post_id: postId,
      author_id: authorId,
      author_name: authorName,
      body,
    })
    .select()
    .single();

  if (error) throw error;
  return data as Comment;
}

export async function deleteComment(id: number): Promise<void> {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { error } = await client.from(COMMENTS_TABLE).delete().eq('id', id);
  if (error) throw error;
}

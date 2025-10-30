import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export interface Project {
  id: string;
  user_id: string;
  title: string;
  category: string;
  description: string;
  budget: number;
  budget_type: 'fixed' | 'hourly' | 'monthly';
  location: string;
  deadline: string;
  urgency: 'low' | 'medium' | 'high';
  skills: string[];
  requirements?: string;
  attachments?: string[];
  status: 'pending' | 'open' | 'in_progress' | 'completed' | 'cancelled';
  created_at: string;
  updated_at: string;
}

export interface Bid {
  id: string;
  project_id: string;
  seller_id: string;
  bid_amount: number;
  message?: string;
  status: 'pending' | 'accepted' | 'rejected';
  created_at: string;
  seller?: {
    id: string;
    name: string;
    avatar?: string;
    rating: number;
    review_count: number;
    company?: string;
    job_title?: string;
    location?: string;
    is_verified: boolean;
  };
}

export interface ProjectMessage {
  id: string;
  project_id: string;
  sender_id: string;
  recipient_id: string;
  content: string;
  sent_at: string;
  sender?: {
    id: string;
    name: string;
    avatar?: string;
  };
}

export function useBuyerProjects(userId: string | undefined) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) return;

    async function fetchProjects() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .eq('user_id', userId)
          .order('created_at', { ascending: false });

        if (error) throw error;
        setProjects(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch projects');
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, [userId]);

  return { projects, loading, error, refetch: () => {
    if (userId) {
      supabase
        .from('projects')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .then(({ data, error }) => {
          if (!error && data) setProjects(data);
        });
    }
  }};
}

export function useProjectBids(projectId: string | undefined) {
  const [bids, setBids] = useState<Bid[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!projectId) return;

    async function fetchBids() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('bids')
          .select(`
            *,
            seller:users!bids_seller_id_fkey (
              id,
              name,
              avatar,
              rating,
              review_count,
              company,
              job_title,
              location,
              is_verified
            )
          `)
          .eq('project_id', projectId)
          .order('created_at', { ascending: false });

        if (error) throw error;
        setBids(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch bids');
      } finally {
        setLoading(false);
      }
    }

    fetchBids();
  }, [projectId]);

  return { bids, loading, error };
}

export function useProjectMessages(projectId: string | undefined) {
  const [messages, setMessages] = useState<ProjectMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!projectId) return;

    async function fetchMessages() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('project_messages')
          .select(`
            *,
            sender:users!project_messages_sender_id_fkey (
              id,
              name,
              avatar
            )
          `)
          .eq('project_id', projectId)
          .order('sent_at', { ascending: true });

        if (error) throw error;
        setMessages(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch messages');
      } finally {
        setLoading(false);
      }
    }

    fetchMessages();
  }, [projectId]);

  return { messages, loading, error };
}

export function useProjectDetail(projectId: string | undefined) {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!projectId) return;

    async function fetchProject() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .eq('id', projectId)
          .single();

        if (error) throw error;
        setProject(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch project');
      } finally {
        setLoading(false);
      }
    }

    fetchProject();
  }, [projectId]);

  return { project, loading, error };
}

export function useSubmitBid() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitBid = async (projectId: string, bidAmount: number, message?: string) => {
    try {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from('bids')
        .insert({
          project_id: projectId,
          bid_amount: bidAmount,
          message: message || null
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to submit bid';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { submitBid, loading, error };
}

export function useSendMessage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async (projectId: string, recipientId: string, content: string) => {
    try {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from('project_messages')
        .insert({
          project_id: projectId,
          recipient_id: recipientId,
          content
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to send message';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading, error };
}

export function useUpdateBidStatus() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateBidStatus = async (bidId: string, status: 'accepted' | 'rejected') => {
    try {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from('bids')
        .update({ status })
        .eq('id', bidId)
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to update bid status';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { updateBidStatus, loading, error };
}

export function useAvailableProjects(sellerId: string | undefined) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!sellerId) return;

    async function fetchAvailableProjects() {
      try {
        setLoading(true);
        // Get projects that are open and not posted by this seller
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .eq('status', 'open')
          .neq('user_id', sellerId)
          .order('created_at', { ascending: false });

        if (error) throw error;
        setProjects(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch available projects');
      } finally {
        setLoading(false);
      }
    }

    fetchAvailableProjects();
  }, [sellerId]);

  return { projects, loading, error, refetch: () => {
    if (sellerId) {
      supabase
        .from('projects')
        .select('*')
        .eq('status', 'open')
        .neq('user_id', sellerId)
        .order('created_at', { ascending: false })
        .then(({ data, error }) => {
          if (!error && data) setProjects(data);
        });
    }
  }};
}

export function useFeaturedProjects(sellerId: string | undefined) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!sellerId) return;

    async function fetchFeaturedProjects() {
      try {
        setLoading(true);
        // Get high-budget projects that are open and not posted by this seller
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .eq('status', 'open')
          .neq('user_id', sellerId)
          .gte('budget', 500) // Consider projects over £500 as featured
          .order('budget', { ascending: false })
          .limit(6);

        if (error) throw error;
        setProjects(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch featured projects');
      } finally {
        setLoading(false);
      }
    }

    fetchFeaturedProjects();
  }, [sellerId]);

  return { projects, loading, error };
}

export function useSearchBasedProjects(sellerId: string | undefined) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!sellerId) return;

    async function fetchSearchBasedProjects() {
      try {
        setLoading(true);
        // For now, just get recent projects. In a real app, this would be based on seller's search history
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .eq('status', 'open')
          .neq('user_id', sellerId)
          .order('created_at', { ascending: false })
          .limit(6);

        if (error) throw error;
        setProjects(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch search-based projects');
      } finally {
        setLoading(false);
      }
    }

    fetchSearchBasedProjects();
  }, [sellerId]);

  return { projects, loading, error };
}

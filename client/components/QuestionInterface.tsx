// Interface for each question
export interface Question {
  id: string;
  frontend_id: string;
  title: string;
  difficulty: string;
  content: string;
  likes: number;
  dislikes: number;
  topic_tags: string[];
  hints: string[];
  url: string;
  is_paid_only: boolean;
  has_solution: boolean;
  has_video_solution: boolean;
  stats?: {
    total_accepted: string;
    total_submission: string;
    acceptance_rate: string;
  };
}

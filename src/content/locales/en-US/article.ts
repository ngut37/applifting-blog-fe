import { MessageObject } from '../../types';

export const articleMessages = Object.freeze<MessageObject>({
  'article.related_articles.title': 'Related Articles',

  'article.comments.title': 'Comments ({count})',

  // COMMENT INPUT
  'article.comments.input.placeholder': 'Join the discussion',
  'article.comments.input.error.required': 'Jot something down',
  'article.comments.input.button': 'Comment',
  'article.comments.input.toast.title': 'Success! 🎉',
  'article.comments.input.toast.description': 'Your comment was added.',
});

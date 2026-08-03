import { useState, useCallback } from 'react';

// Custom hook for managing toasts
export function useToast() {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, description = '', type = 'success', duration = 5000) => {
    const id = Date.now() + Math.random();
    const newToast = {
      id,
      message,
      description,
      type,
      duration
    };

    setToasts(prev => [...prev, newToast]);

    // Auto remove after duration
    if (duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }

    return id;
  }, []);

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const success = useCallback((message, description = '', duration = 5000) => {
    return addToast(message, description, 'success', duration);
  }, [addToast]);

  const error = useCallback((message, description = '', duration = 5000) => {
    return addToast(message, description, 'error', duration);
  }, [addToast]);

  const warning = useCallback((message, description = '', duration = 5000) => {
    return addToast(message, description, 'warning', duration);
  }, [addToast]);

  const info = useCallback((message, description = '', duration = 5000) => {
    return addToast(message, description, 'info', duration);
  }, [addToast]);

  return {
    toasts,
    addToast,
    removeToast,
    success,
    error,
    warning,
    info
  };
}

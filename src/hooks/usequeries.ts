import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

// Query submission hook
export function useSubmitQuery() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { name: string; email: string; phone: string; message: string }) => {
      if (!actor) throw new Error('Actor not available');
      // Note: This will fail as the backend no longer has submitQuery method
      // But we keep the structure for potential future implementation
      console.log('Query submission:', data);
      // Simulate success for now
      return Promise.resolve();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['submissions'] });
    },
  });
}

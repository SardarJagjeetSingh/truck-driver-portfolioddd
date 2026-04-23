import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { ServiceInterest } from '../backend';

interface InquiryInput {
  name: string;
  email: string;
  company: string | null;
  serviceInterest: string;
  message: string;
}

const serviceInterestMap: Record<string, ServiceInterest> = {
  websiteBuilding: ServiceInterest.websiteBuilding,
  softwareDevelopment: ServiceInterest.softwareDevelopment,
  itConsulting: ServiceInterest.itConsulting,
  aiAutomation: ServiceInterest.aiAutomation,
  hostingAndDomain: ServiceInterest.hostingAndDomain,
};

export function useSubmitInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: InquiryInput) => {
      if (!actor) {
        throw new Error('Actor not available');
      }

      const serviceInterest = serviceInterestMap[input.serviceInterest];
      if (!serviceInterest) {
        throw new Error('Invalid service interest');
      }

      await actor.submitInquiry(
        input.name,
        input.email,
        input.company,
        serviceInterest,
        input.message
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inquiries'] });
    },
  });
}

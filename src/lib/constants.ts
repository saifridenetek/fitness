import type { NavItem, Gym, Plan, Sport } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Gyms', href: '/gyms' },
  { label: 'Plans', href: '/plans' },
  { label: 'Sports', href: '/sports' },
  { label: 'Generate Plan', href: '/generate-plan' },
  { label: 'Profile', href: '/profile' },
];

export const DUMMY_GYMS: Gym[] = [
  { id: '1', name: 'Fitness First Downtown', location: '123 Main St, Anytown, USA', plans: [], subscriptions: [] },
  { id: '2', name: 'Powerhouse Gym Uptown', location: '456 Oak Ave, Anytown, USA', plans: [], subscriptions: [] },
  { id: '3', name: 'Community Center Gym', location: '789 Pine Ln, Anytown, USA', plans: [], subscriptions: [] },
  { id: '4', name: 'Zen Yoga Studio', location: '101 Lotus Blvd, Anytown, USA', plans: [], subscriptions: [] },
];

export const DUMMY_SPORTS: Sport[] = [
  { id: '1', name: 'Weightlifting', plans: [] },
  { id: '2', name: 'Yoga', plans: [] },
  { id: '3', name: 'Running', plans: [] },
  { id: '4', name: 'CrossFit', plans: [] },
  { id: '5', name: 'Swimming', plans: [] },
  { id: '6', name: 'Cycling', plans: [] },
];

export const DUMMY_PLANS: Plan[] = [
  { id: '1', name: 'Beginner Strength', price: 29.99, description: 'A 4-week plan to build foundational strength.', gymId: '1', sportId: '1' },
  { id: '2', name: 'Yoga Flow Express', price: 19.99, description: '30-minute daily yoga sessions for flexibility.', gymId: '4', sportId: '2' },
  { id: '3', name: 'Marathon Prep Lite', price: 49.99, description: '12-week running plan for aspiring marathoners.', gymId: '3', sportId: '3' },
  { id: '4', name: 'Muscle Builder Pro', price: 59.99, description: 'Intensive 8-week muscle gain program.', gymId: '2', sportId: '1' },
];

export const FITNESS_LEVELS = ['Beginner', 'Intermediate', 'Advanced'];

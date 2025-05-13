export interface NavItem {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

// Simplified types based on user's NestJS entities for frontend display
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'CLIENT' | 'COACH';
  // subscriptions relation not directly used in UI for now
}

export interface Gym {
  id: string;
  name: string;
  location: string;
  plans: Plan[]; // Relation
  subscriptions: Subscription[]; // Relation
}

export interface Sport {
  id: string;
  name: string;
  plans: Plan[]; // Relation
}

export interface Plan {
  id: string;
  name: string;
  price: number;
  description: string;
  gymId: string; // Represents Gym ManyToOne
  sportId: string; // Represents Sport ManyToOne
}

export interface Subscription {
  id: string;
  userId: string; // Represents User ManyToOne
  gymId: string; // Represents Gym ManyToOne
  planId: string; // Represents Plan ManyToOne
  startDate: string; // Date as string for simplicity
  endDate: string; // Date as string for simplicity
}

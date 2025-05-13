import type { User } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { Mail, UserCircle2, ShieldCheck, Edit3 } from 'lucide-react';
import Image from 'next/image';

// Dummy user data
const DUMMY_USER: User = {
  id: 'user123',
  name: 'Alex Johnson',
  email: 'alex.johnson@example.com',
  role: 'CLIENT',
};

export default function ProfilePage() {
  const user = DUMMY_USER;
  const userInitials = user.name.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <SectionWrapper title="Your Profile" subtitle="Manage your account details and preferences.">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <Card className="md:col-span-1 shadow-lg">
          <CardHeader className="items-center text-center">
            <Avatar className="w-24 h-24 mb-4 border-4 border-primary shadow-md">
              <AvatarImage src={`https://picsum.photos/seed/${user.id}/200`} alt={user.name} data-ai-hint="profile picture" />
              <AvatarFallback className="text-3xl bg-muted text-muted-foreground">{userInitials}</AvatarFallback>
            </Avatar>
            <CardTitle className="text-2xl text-foreground">{user.name}</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">{user.role.charAt(0) + user.role.slice(1).toLowerCase()}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-3 text-primary" />
              <span className="text-foreground/90">{user.email}</span>
            </div>
            <div className="flex items-center">
              <UserCircle2 className="h-5 w-5 mr-3 text-primary" />
              <span className="text-foreground/90">Member since: Jan 2023 (Placeholder)</span>
            </div>
             <div className="flex items-center">
              <ShieldCheck className="h-5 w-5 mr-3 text-green-500" />
              <span className="text-foreground/90">Account Verified (Placeholder)</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              <Edit3 className="mr-2 h-4 w-4" /> Edit Profile
            </Button>
          </CardFooter>
        </Card>

        <div className="md:col-span-2 space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Subscription Details</CardTitle>
              <CardDescription>Your current active subscriptions.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Placeholder for subscriptions list */}
              <div className="p-6 bg-muted/50 rounded-md text-center">
                <p className="text-muted-foreground">No active subscriptions found. (Placeholder)</p>
                <Button variant="link" className="mt-2 text-primary">Explore Plans</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Saved Workout Plans</CardTitle>
              <CardDescription>Your AI-generated or saved workout plans.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Placeholder for saved plans list */}
              <div className="p-6 bg-muted/50 rounded-md text-center">
                <p className="text-muted-foreground">You haven't saved any plans yet. (Placeholder)</p>
                <Button variant="link" className="mt-2 text-primary">Generate a Plan</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}

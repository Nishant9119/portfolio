import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "What is Hirebuddy?",
    subtitle: "Making job hunting effortless for job seekers everywhere",
    excerpt: "Finding a job sucks and we're here to fix that. Learn how Hirebuddy automates your entire job search process.",
    author: "Sarvagya",
    date: "2024-01-01",
    readTime: "6 min read",
    category: "Company",
    content: `Finding a job sucks and we're here to fix that.

Hi everyone, how are you doing? If you've ended up on this page, chances are you're either looking for a job, one of our competitors, an investor (pls give us your money), or someone who just likes to read. Don't worry. We got you. In today's blog we'll be going over Hirebuddy- what exactly is it, and how can we help you out?

Well, job hunting is a painful process. Let's talk about how a normal person goes about getting a job. The first step starts at finding good openings, just like everyone, you open 10s of online job portals and spend hours and hours scrolling through them to find relevant openings. You found one that caught your eye- oops, it requires 10 years of experience, found another that seems just like the perfect role - oh no it's unpaid. Hours and hours are spent scrolling through platforms trying to find the best openings.

Now let's assume after hours of us scrolling to find good openings, we've found a few we'd like to apply to. Now the harder part starts- applying to these places. Why do we have to fill out the same forms over and over again?

You create a perfect CV, a nicely written cover letter, and fill out the same boring forms hoping to hear back. If you want to stand out from the rest of the applicants, you have to do things like change your CV every time according to the JD, create a new cover letter for every role you apply to, research the company, and send personally curated cold emails. All of this to never hear back from companies.

Hours and hours are wasted finding out these jobs and applying to them and that's what exactly Hirebuddy is here to fix.

<h2 class="text-3xl font-semibold text-[#403334] mt-8 mb-4">What is Hirebuddy?</h2>

Well, if I were to describe it one line- Hirebuddy is the AI assistant that finds, matches, and applies to jobs- so you don't have to.

Hirebuddy is a platform that automates the entire job/ internship search and application process. Making finding a job effortless for job seekers.

<h3 class="text-2xl font-semibold text-[#403334] mt-8 mb-4">How does our platform work?</h3>

Well, simple- you come to our website, sign in, and go through the basic onboarding.

Don't have a resume? Don't worry - you can use our tool to make one. Get ATS scores, relevancy to roles you're applying and tailored feedback on what you can do to make your resume stand out. No more having multiple templates open trying to find the best one. Let Hirebuddy help you with that.

Remember the part where I talked about going through multiple job boards? Well, we fix that. Our job board picks up openings from all over the internet, all in one place, and our unique relevancy scoring system matches you with the best openings catered to you. No more having to have 10s of sites open and having to scroll through all of them. Get matched with the best jobs meant for you with no hassle. Landing a job isn't about endless scrolling - it's about smart strategy.

Get matched with jobs that are tailored to your skills and goals, in one single click.

<h3 class="text-2xl font-semibold text-[#403334] mt-8 mb-4">Well I got matched with good jobs, now what's next?</h3>

Usually it's creating new CVs, cover letters, writing cold emails and filling out boring and repetitive forms but as Chadwick Boseman said- (insert we don't do that here meme)

Hirebuddy takes care of sending out your applications to the companies you want to. We fill out forms, create new CVs for every role, create cover letters , write personalised cold emails - all of that. We send out your job applications so you don't have to.

Job applications should be personalised and not templatised and that is exactly what Hirebuddy believes in. Every application we send is tailored to the role, the company, and your profile. No two jobs are the same, so your application shouldn't be either. Whether it's adjusting your CV to highlight relevant skills or writing a cold email that actually gets opened, we make sure you're putting your best foot forward - every single time. With Hirebuddy, you're not applying more, you're applying smarter.

Get notified of every place we've applied to on your behalf through your personal dashboard. Track everything - upcoming interviews, number of offers, application statuses - all in one place. No spreadsheets, no guesswork, just clarity and control.

We believe job-seeking should be about you -your skills, your goals - not about managing forms or copy-pasting cover letters. Hirebuddy handles the busywork so you can focus on what actually moves the needle.

Hirebuddy handles the repetitive stuff so you can focus on preparing, upskilling, and landing the job.

We've helped multiple people land roles so far and would love to help you out too! Whether you're a student looking for internships, a fresh graduate, or a working professional switching jobs — Hirebuddy works for you. Check us out today!

Best
NIshant.`
  }
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
    setIsDialogOpen(true);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">Blog</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Thoughts, insights, and stories from my journey in technology and beyond.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card 
            key={post.id} 
            className="hover:shadow-lg transition-shadow cursor-pointer group"
            onClick={() => handlePostClick(post)}
          >
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary" className="text-xs">
                  {post.category}
                </Badge>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>
              <CardTitle className="text-xl group-hover:text-primary transition-colors">
                {post.title}
              </CardTitle>
              <CardDescription className="text-sm font-medium">
                {post.subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  {post.author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {formatDate(post.date)}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center gap-2 mb-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsDialogOpen(false)}
                className="p-2"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <Badge variant="secondary" className="text-xs">
                {selectedPost?.category}
              </Badge>
            </div>
            <DialogTitle className="text-3xl font-bold text-foreground">
              {selectedPost?.title}
            </DialogTitle>
            <p className="text-lg text-muted-foreground font-medium">
              {selectedPost?.subtitle}
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-4">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {selectedPost?.author}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {selectedPost?.date && formatDate(selectedPost.date)}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {selectedPost?.readTime}
              </div>
            </div>
          </DialogHeader>
          <div 
            className="prose prose-lg max-w-none mt-6"
            dangerouslySetInnerHTML={{ __html: selectedPost?.content || '' }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Blog;

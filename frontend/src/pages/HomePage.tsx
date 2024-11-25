import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowRight, CheckCircle, Facebook, Instagram, Twitter, ShoppingCart, Zap, Globe, BarChart } from 'lucide-react'
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, useAuth, useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  // const { isLoaded, getToken, signOut } = useAuth();
  const { signOut } = useAuth();

  const { openSignIn } = useClerk();  // Destructure openSignIn function

  // Trigger sign-in flow on button click
  const handleGetStarted = () => {
    openSignIn();  // This will open the Clerk sign-in modal
  };

  // Handle Sign Out
  const handleSignOut = () => {
    signOut(); // Sign out the user
  };

  const navigate = useNavigate(); // Initialize navigate

  // Function to handle navigation to the dashboard
  const handleDashboardClick = () => {
    navigate("/dashboard"); // Redirect to /dashboard route
  };

  // const getAllPosts = async () => {
  //   const token = await getToken();
  //   const response = await fetch(
  //     `${import.meta.env.VITE_BACKEND_API_URL}/posts`,
  //     {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${token}`, // Replace 'YOUR_AUTH_TOKEN' with the actual JWT token
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   const data = await response.json();
  //   console.log(data);
  // };

  return (
    <div className="flex flex-col min-h-screen bg-white text-blue-900">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-blue-200">
        <Link className="flex items-center justify-center" to="#">
          <ShoppingCart className="h-6 w-6 text-blue-600" />
          <span className="ml-2 text-xl font-bold text-blue-600">Social2Amazon</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-blue-600 hover:underline underline-offset-4" to="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-blue-600 hover:underline underline-offset-4" to="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:text-blue-600 hover:underline underline-offset-4" to="#pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:text-blue-600 hover:underline underline-offset-4" to="#contact">
            Contact
          </Link>
          <SignedIn>
            {/* Render Sign Out button when signed in */}
            <Button onClick={handleSignOut} className="bg-red-600 text-white hover:bg-red-700">
              Sign Out
            </Button>
            <Button 
              variant="outline" 
              className="text-blue-600 border-blue-600 hover:bg-blue-50" 
              onClick={handleDashboardClick} // Trigger navigation on click
            >
              Dashboard
            </Button>
          </SignedIn>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-blue-600">
                  From Social Media to Amazon Listings in Minutes
                </h1>
                <p className="mx-auto max-w-[700px] text-blue-800 md:text-xl dark:text-blue-200">
                  Automatically create Amazon listings from your social media profiles using AI. Streamline your e-commerce business today.
                </p>
              </div>

              <SignedOut>
                <div className="space-x-4">
                  <Button onClick={handleGetStarted} className="bg-blue-600 text-white hover:bg-blue-700">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </SignedOut>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-600">Features</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <Zap className="h-8 w-8 mb-2 text-blue-600" />
                  <CardTitle className="text-blue-600">AI-Powered Listings</CardTitle>
                </CardHeader>
                <CardContent>Generate optimized Amazon listings using advanced AI technology.</CardContent>
              </Card>
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <Globe className="h-8 w-8 mb-2 text-blue-600" />
                  <CardTitle className="text-blue-600">Multi-Platform Support</CardTitle>
                </CardHeader>
                <CardContent>Connect and monitor multiple social media profiles in one place.</CardContent>
              </Card>
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <BarChart className="h-8 w-8 mb-2 text-blue-600" />
                  <CardTitle className="text-blue-600">Automated Monitoring</CardTitle>
                </CardHeader>
                <CardContent>Stay updated with real-time monitoring of your social media content.</CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-600">How It Works</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 text-4xl font-bold text-blue-600">1</div>
                <h3 className="text-xl font-bold mb-2 text-blue-800">Connect Your Profiles</h3>
                <p className="text-blue-600">Link your social media accounts to our platform.</p>
                <div className="mt-4 flex space-x-2">
                  <Facebook className="h-8 w-8 text-blue-600" />
                  <Instagram className="h-8 w-8 text-blue-600" />
                  <Twitter className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 text-4xl font-bold text-blue-600">2</div>
                <h3 className="text-xl font-bold mb-2 text-blue-800">AI Analysis</h3>
                <p className="text-blue-600">Our AI analyzes your content and creates optimized listings.</p>
                <Zap className="mt-4 h-12 w-12 text-blue-600" />
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 text-4xl font-bold text-blue-600">3</div>
                <h3 className="text-xl font-bold mb-2 text-blue-800">List on Amazon</h3>
                <p className="text-blue-600">Approve and publish your new listings on Amazon with one click.</p>
                <ShoppingCart className="mt-4 h-12 w-12 text-blue-600" />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-600">Testimonials</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@johndoe" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-blue-600">John Doe</CardTitle>
                      <CardDescription>Social Media Influencer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  "This app has revolutionized how I manage my e-commerce business. It's a game-changer!"
                </CardContent>
              </Card>
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@janedoe" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-blue-600">Jane Doe</CardTitle>
                      <CardDescription>Small Business Owner</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  "The AI-generated listings are spot-on. It's like having a team of experts working for me 24/7."
                </CardContent>
              </Card>
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@alexsmith" />
                      <AvatarFallback>AS</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-blue-600">Alex Smith</CardTitle>
                      <CardDescription>E-commerce Entrepreneur</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  "The time I save with this app allows me to focus on growing my business. Highly recommended!"
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-600">Pricing Plans</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-600">Basic</CardTitle>
                  <CardDescription>For small businesses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-2 text-blue-600">$29/mo</div>
                  <ul className="space-y-2">
                    <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-blue-600" /> 1 Social Media Account</li>
                    <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-blue-600" /> 50 Listings/month</li>
                    <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-blue-600" /> Basic AI Analysis</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white-100">Choose Plan</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-600">Pro</CardTitle>
                  <CardDescription>For growing businesses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-2 text-blue-600">$79/mo</div>
                  <ul className="space-y-2">
                    <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-blue-600" /> 3 Social Media Accounts</li>
                    <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-blue-600" /> 200 Listings/month</li>
                    <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-blue-600" /> Advanced AI Analysis</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Choose Plan</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-600">Enterprise</CardTitle>
                  <CardDescription>For large businesses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-2 text-blue-600">Custom</div>
                  <ul className="space-y-2">
                    <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-blue-600" /> Unlimited Social Media Accounts</li>
                    <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-blue-600" /> Unlimited Listings</li>
                    <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-blue-600" /> Custom AI Solutions</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Contact Sales</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-100">Ready to Streamline Your E-commerce?</h2>
                <p className="mx-auto max-w-[600px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of successful sellers who have transformed their business with our AI-powered platform.
                </p>
              </div>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-blue-200">
        <p className="text-xs text-blue-600">© 2024 Social2Amazon. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-blue-600" to="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-blue-600" to="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

export default Home
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Gift,
  ArrowRight,
  Mail,
  Briefcase,
  AlertCircle,
  CheckCircle2,
  EuroIcon,
} from 'lucide-react';
import { Header } from './components/Header';
import { ThemeProvider } from './components/ThemeProvider';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <Header />
      <div className="container-fluid mx-0 px-0 py-8 md:py-16 space-y-8 md:space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-4 md:space-y-6">
          <div className="flex justify-center mb-4 md:mb-8">
            <img src="/playson-logo.png" alt="Playson" className="h-16 md:h-24 lg:h-32 w-auto" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 px-2">
            Playson Referral Program
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            This program is designed to encourage everyone to refer qualified candidates for Playson's job openings. 
            The list of vacancies can always be found in our <a href="https://jobs.ashbyhq.com/playson" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Playson Jobs</a>.
          </p>
        </div>

        {/* Reward Info */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4">
              <Gift className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-semibold">Employee Referral Reward</h2>
            </div>
            <div className="relative p-6 bg-primary/5 rounded-lg overflow-hidden group">
              <div className="flex items-center justify-between relative z-10">
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-950 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-sm font-medium">Refer</span>
                </div>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-200 to-green-200 dark:from-blue-900 dark:to-green-900 relative">
                  <div className="absolute -top-1 left-0 w-2 h-2 bg-blue-400 dark:bg-blue-600 rounded-full animate-ping" />
                  <div className="absolute -top-1 right-0 w-2 h-2 bg-green-400 dark:bg-green-600 rounded-full animate-ping delay-300" />
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-950 flex items-center justify-center">
                    <Gift className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-sm font-medium">Reward</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <p className="text-muted-foreground">
              In order to encourage everyone to refer talented people, successful referrals will always be rewarded.
              Bonuses will vary depending on position and how hard it is to fill them.
            </p>
          </Card>

          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4">
              <CheckCircle2 className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-semibold">Payment Structure</h2>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4 p-4 bg-primary/5 rounded-lg">
              <div className="w-32 sm:flex-1 text-center p-4 space-y-2">
                <div className="relative w-full aspect-square rounded-full border-4 border-primary/20 group">
                  <div className="absolute inset-0 rounded-full border-4 border-primary transition-all duration-1000 group-hover:rotate-180" 
                       style={{ clipPath: 'inset(0 50% 0 0)' }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl sm:text-lg font-semibold">50%</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">After Hire</p>
              </div>
              <div className="flex sm:flex-col items-center gap-2 text-primary">
                <div className="w-16 h-0.5 sm:w-0.5 sm:h-16 bg-primary/50" />
                <span className="text-lg sm:text-sm font-medium">+</span>
                <div className="w-16 h-0.5 sm:w-0.5 sm:h-16 bg-primary/50" />
              </div>
              <div className="w-32 sm:flex-1 text-center p-4 space-y-2">
                <div className="relative w-full aspect-square rounded-full border-4 border-primary/20 group">
                  <div className="absolute inset-0 rounded-full border-4 border-primary transition-all duration-1000 group-hover:rotate-180"
                       style={{ clipPath: 'inset(0 50% 0 0)' }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl sm:text-lg font-semibold">50%</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">After Probation</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              The referral bonus is paid in 2 parts: 50% after referred candidate is hired and 
              the other 50% when new employee successfully passes the probation period.
            </p>
          </Card>
        </div>

        {/* Bonus Table */}
        <Card className="overflow-hidden">
          <div className="p-4 md:p-6 bg-primary/5">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
              Referral Bonus Structure
            </h2>
          </div>
          <div className="p-3 sm:p-4 md:p-6">
            <div className="grid grid-cols-2 gap-2 sm:gap-4 divide-y text-xs sm:text-sm md:text-base">
              <div className="font-semibold">Level/Role</div>
              <div className="font-semibold">Bonus Amount</div>
              
              <div className="pt-3 md:pt-4">
                <div className="inline-flex px-2 py-1 sm:px-3 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs sm:text-sm">
                  Entry/Administrative or Junior Specialist
                </div>
              </div>
              <div className="flex items-center gap-1 pt-3 md:pt-4"><EuroIcon className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />200</div>
              
              <div className="pt-3 md:pt-4">
                <div className="inline-flex px-2 py-1 sm:px-3 rounded-full bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 text-xs sm:text-sm">
                  Middle Specialist
                </div>
              </div>
              <div className="flex items-center gap-1 pt-3 md:pt-4"><EuroIcon className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />800</div>
              
              <div className="pt-3 md:pt-4">
                <div className="inline-flex px-2 py-1 sm:px-3 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 text-xs sm:text-sm">
                  Senior Specialist
                </div>
              </div>
              <div className="flex items-center gap-1 pt-3 md:pt-4"><EuroIcon className="h-3 w-3 sm:h-4 sm:w-4 text-purple-600" />1,500</div>
              
              <div className="pt-3 md:pt-4">
                <div className="inline-flex px-2 py-1 sm:px-3 rounded-full bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300 text-xs sm:text-sm">
                  Tech Lead, Manager, Director
                </div>
              </div>
              <div className="flex items-center gap-1 pt-3 md:pt-4"><EuroIcon className="h-3 w-3 sm:h-4 sm:w-4 text-orange-600" />1,700</div>
              
              <div className="pt-3 md:pt-4">
                <div className="inline-flex px-2 py-1 sm:px-3 rounded-full bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 text-xs sm:text-sm">
                  C-level
                </div>
              </div>
              <div className="flex items-center gap-1 pt-3 md:pt-4"><EuroIcon className="h-3 w-3 sm:h-4 sm:w-4 text-red-600" />2,300</div>
            </div>
          </div>
        </Card>

        {/* Additional Rules */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 space-y-6">
            <h2 className="text-xl sm:text-2xl font-semibold">Additional Rules</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base">Employees can refer as many times as they wish</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span>If the same candidate is referred by multiple employees, the first employee gets a reward</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span>Conditions for internal and external recommendations are the same</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span>The scheme of referral bonuses works for all employees except representatives of the recruiting team</span>
              </li>
            </ul>
          </Card>

          <div className="space-y-8">
            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <Briefcase className="w-8 h-8 text-primary" />
                <h2 className="text-xl sm:text-2xl font-semibold">How to Refer?</h2>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base">
                Navigate to our Careers page. Find the job opening that you want to refer your friends for 
                and click on "Refer a Friend". Fill out the necessary details and submit them, and voila, 
                you have successfully referred someone.
              </p>
              <Button asChild className="w-full group">
                <a href="https://jobs.ashbyhq.com/playson" target="_blank" rel="noopener noreferrer">
                  Visit Careers Page
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </Card>

            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <AlertCircle className="w-8 h-8 text-primary" />
                <h2 className="text-xl sm:text-2xl font-semibold">The Process</h2>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base">
                When our Talent Acquisition receives a referred candidate, this candidate will be processed 
                within a standardized recruitment process. You will receive notifications about the candidate's 
                progress through the pipeline as we want to be sure you know how your referral performs.
              </p>
            </Card>
          </div>
        </div>

        {/* Contact Section */}
        <Card className="p-6 text-center space-y-4">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold">Questions?</h2>
          <p className="text-muted-foreground">
            In case of any questions please contact our dedicated HR Team at
          </p>
          <a href="mailto:recruiting@playson.com"
            className="text-primary hover:underline font-medium inline-flex items-center gap-2"
          >
            recruiting@playson.com
            <ArrowRight className="w-4 h-4" />
          </a>
        </Card>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
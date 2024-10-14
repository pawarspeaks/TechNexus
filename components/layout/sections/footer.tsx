import { useEffect, useState, ReactNode } from "react";
import { Separator } from "@/components/ui/separator";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import TechNexusLogo from './logo/technexus.png';
import DevCodeLogo from './logo/DevCode-without-BG.png';

interface Contributor {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

interface FooterSectionProps {
  children?: ReactNode; // Explicitly declare the children prop if you're using it
  className?: string;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ className, children }) => {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchContributors = async () => {
      const response = await fetch("https://api.github.com/repos/pawarspeaks/TechNexus/contributors");
      const data: Contributor[] = await response.json();
      setContributors(data);
    };

    fetchContributors();
  }, []);

  const latestContributors = contributors.slice(0, 10);

  return (
    <footer id="footer" className={`container pt-24 sm:pt-32 ${className}`}>
      <div className="p-10 bg-card border border-secondary rounded-b-none rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="block items-start">
              <Image src={TechNexusLogo} className="h-16 w-auto mb-2" alt="TechNexus Logo" />
              <Image src={DevCodeLogo} className="h-16 w-auto" alt="DevCode Logo" />
            </Link>
          </div>

          <div className="col-span-full xl:col-span-4 flex flex-wrap justify-start gap-4">
            {latestContributors.map((contributor) => (
              <div key={contributor.login} className="flex flex-col items-center">
                <Link href={contributor.html_url} target="_blank">
                  <img
                    src={contributor.avatar_url}
                    alt={contributor.login}
                    className="w-12 h-12 rounded-full border border-secondary hover:border-primary transition-all"
                  />
                </Link>
                <span className="mt-1 text-sm text-center">{contributor.login}</span>
              </div>
            ))}
            <div className="flex flex-col items-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center justify-center w-12 h-12 rounded-full border border-secondary hover:border-primary transition-all"
              >
                <MoreHorizontal className="w-6 h-6" />
              </button>
              <span className="mt-1 text-sm text-center">More</span>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section>
          <h3>
            &copy; 2024 Designed and developed by
            <Link
              target="_blank"
              href="https://www.linkedin.com/company/dev-code-community/"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              Devcode and by active contributors
            </Link>
          </h3>
        </section>
      </div>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle>All Contributors</DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4 max-h-[60vh] overflow-y-auto">
            {contributors.map((contributor) => (
              <div key={contributor.login} className="flex flex-col items-center">
                <Link href={contributor.html_url} target="_blank">
                  <img
                    src={contributor.avatar_url}
                    alt={contributor.login}
                    className="w-16 h-16 rounded-full border border-secondary hover:border-primary transition-all"
                  />
                </Link>
                <Link href={contributor.html_url} target="_blank" className="mt-2 text-sm text-blue-100 hover:underline text-center">
                  {contributor.login}
                </Link>
                <span className="text-sm mt-1 text-gray-200">{contributor.contributions} contributions</span>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
};

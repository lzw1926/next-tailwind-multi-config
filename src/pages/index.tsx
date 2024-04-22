import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col p-24 bg-primary ${inter.className}`}
    >
      <Card className="p-5">
      <Button>test</Button> 
      </Card>
   
    </main>
  );
}

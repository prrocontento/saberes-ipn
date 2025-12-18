import { BuildAlert } from "@/components/build-alert";
import { title } from "@/components/primitives";


export default function Home() {
  return (
 <div className="text-center">
      <div className="flex h-full flex-col items-center justify-center p-24">
                <BuildAlert />
              </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage () {
    return (
        <div>
            Landing
            <div 
                className="a"
            >
                <Link href="/sign-in">
                    <Button>
                        Login
                    </Button>
                </Link>
                <Link href="/sign-up">
                    <Button>
                        Register
                    </Button>
                </Link>
            </div>
        </div>
    )
}
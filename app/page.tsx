
import { SessionWrapper } from "@/app/components/SessionWrapper";
import SignInPage  from "@/app/components/login/AuthComponent";
import SignOutPage from "@/app/components/login/SignoutComponent";
import {auth} from "@/lib/auth";


export default async function Login() {
  
    const session = await auth();
    const isAuthenticated = !!session?.user;

    return (
      <div>
        <SessionWrapper>
          {
          isAuthenticated? <SignOutPage/>:<SignInPage/>
          }
        </SessionWrapper>
      </div>
    );
    

}
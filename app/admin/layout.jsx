import Provider from "@/components/Provider";
import LoginForm from "@/components/Admin/LoginForm";
import { getServerSession } from "next-auth";
import Logout from "@/components/Admin/Logout";

export default async function DashboardLayout({ children }) {
  const session = await getServerSession();
  return (
    <Provider>
      <section>
        <nav className="mt-[5rem] text-center text-3xl mb-4">
          {session ? (
            <div className="grid place-content-center">
              <h1>Hello</h1>
              <h1>{session.user.email}</h1>
              <Logout />
            </div>
          ) : (
            <h1>Admin Only</h1>
          )}
        </nav>
        {session ? <section>{children}</section> : <LoginForm />}
      </section>
    </Provider>
  );
}

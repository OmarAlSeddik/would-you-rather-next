// -- mui -- //
import { Box } from "@mui/system";
// -- local components -- //
import Auth from "../components/Auth";
import Loading from "../components/Loading";
// -- next -- //
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";
// -- basic & custom hooks -- //
import { useEffect } from "react";
// -- firebase -- //
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
// -- framer motion -- //
import { motion } from "framer-motion";

const AuthPage: NextPage = () => {
  // -- routing -- //
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) router.replace("/");
  }, [loading, router, user]);

  if (loading) return <Loading />;

  const variants = {
    initial: { y: "100%" },
    animate: { y: 0 },
    exit: { y: "100%" },
  };

  return (
    <Box sx={{ overflow: "hidden" }}>
      <Head>
        <title>Auth Page</title>
        <meta name="description" content="The authentication page." />
      </Head>
      <Box
        component={motion.div}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Auth />
      </Box>
    </Box>
  );
};

export default AuthPage;

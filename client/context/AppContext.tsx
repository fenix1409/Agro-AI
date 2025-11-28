"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

const AppContext = createContext<any>(null);

export const AppContextProvider = ({ children }: any) => {

  const router = useRouter();

  const [user, setUser] = useState<any>(null);
  const [chats, setChats] = useState<any[]>([]);
  const [selectedChat, setSelectedChat] = useState<any>(null);
  const [theme, setTheme] = useState<string>("light");
  const [token, setToken] = useState<string | null>(null);
  const [loadingUser, setLoadingUser] = useState(true);


  // Initial localStorage load
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      const savedToken = localStorage.getItem("token");

      if (savedTheme) setTheme(savedTheme);
      if (savedToken) setToken(savedToken);
    }
  }, []);

  // Save theme + update DOM
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  // Save token
  useEffect(() => {
    if (typeof window !== "undefined" && token) {
      localStorage.setItem("token", token);
    }
  }, [token]);



  // ------------------- Fetch User -------------------
  const fetchUser = async () => {
    try {
      const { data } = await axios.get("/api/user/data", {
        headers: { Authorization: token },
      });

      if (data.success) {
        setUser(data.user);
      } else {
        toast.error(data.message);
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoadingUser(false);
    }
  };


  // ------------------- Create Chat -------------------
  const createNewChat = async () => {
    try {
      if (!user) return toast.error("Login to create a new chat");

      router.push("/");

      await axios.get("/api/chat/create", {
        headers: { Authorization: token },
      });

      await fetchUsersChats();
    } catch (error: any) {
      toast.error(error.message);
    }
  };


  // ------------------- Fetch Chats -------------------
  const fetchUsersChats = async () => {
    try {
      const { data } = await axios.get("/api/chat/get", {
        headers: { Authorization: token },
      });

      if (data.success) {
        setChats(data.chats);

        if (data.chats.length === 0) {
          await createNewChat();
          return fetchUsersChats();
        } else {
          setSelectedChat(data.chats[0]);
        }
      } else {
        toast.error(data.message);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };


  // When user is set
  useEffect(() => {
    if (user) {
      fetchUsersChats();
    } else {
      setChats([]);
      setSelectedChat(null);
    }
  }, [user]);


  // When token changes
  useEffect(() => {
    if (token) {
      fetchUser();
    } else {
      setUser(null);
      setLoadingUser(false);
    }
  }, [token]);



  const value = {
    router,
    user,
    setUser,
    fetchUser,
    chats,
    setChats,
    selectedChat,
    setSelectedChat,
    theme,
    setTheme,
    createNewChat,
    loadingUser,
    fetchUsersChats,
    token,
    setToken,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
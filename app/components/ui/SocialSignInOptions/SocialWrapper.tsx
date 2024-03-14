export default function SocialSignInOptions() {
    <div className="flex justify-between p-6">
    <div className="flex-1 mr-1.5">
    <button
        className="w-full font-semibold hover:bg-white hover:text-black border border-white transition duration-300 inline-flex items-center justify-center rounded-md text-md disabled:opacity-50 bg-black text-white h-10 px-4 py-2"
        onClick={() => signIn("google")}
      >
        Sign in with Google
      </button>
    </div>
      
    <div className="flex-1 mr-1.5">
    <button
        className="w-full font-semibold hover:bg-white hover:text-black border border-white transition duration-300 inline-flex items-center justify-center rounded-md text-md disabled:opacity-50 bg-black text-white h-10 px-4 py-2"
        onClick={() => signIn("github")}
      >
        Sign in with GitHub
      </button>
    </div>
      
    </div>
}
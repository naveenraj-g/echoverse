import Link from "next/link";

const NotFound = () => {
  return (
    <section className="flex items-center h-screen p-16 bg-gray-50 text-gray-800">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn&apos;t find this page.
          </p>
          <p className="mt-4 mb-8 dark:text-gray-600">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link
            rel="noopener noreferrer"
            href="/"
            className="px-8 py-3 font-semibold rounded bg-zinc-500 text-white"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;

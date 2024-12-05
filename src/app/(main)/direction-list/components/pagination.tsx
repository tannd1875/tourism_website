import React from "react";

type Prop = {
  onPageChange: (newPage: number) => void;
  currentPage: number;
  end: number;
  length: number;
  numberOfPage: number;
  type: string;
};

const PaginationClassify = {
  current:
    "relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
  not: "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0",
};

const Pagination = ({
  onPageChange,
  currentPage,
  end,
  length,
  numberOfPage,
  type,
}: Prop) => {
  const handlePage = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(currentPage, numberOfPage);
    onPageChange(event.target.value);
  };

  return (
    <>
      {numberOfPage ? (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <button
              value={currentPage - 1 == 0 ? numberOfPage : currentPage - 1}
              onClick={handlePage}
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Trang trước
            </button>
            <button
              value={
                currentPage * 1 + 1 > numberOfPage ? 1 : currentPage * 1 + 1
              }
              onClick={handlePage}
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Trang tiếp
            </button>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-l text-gray-700">
                Đã hiển thị
                <span className="font-medium mx-2">{end}</span>/
                <span className="font-medium mx-2">{length}</span>
                {type}
              </p>
            </div>
            <div>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                {numberOfPage != 1 ? (
                  <button
                    value={
                      currentPage - 1 == 0 ? numberOfPage : currentPage - 1
                    }
                    onClick={handlePage}
                    className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    Prev
                    {/* <span className="sr-only">Previous</span>
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                        clip-rule="evenodd"
                      />
                    </svg> */}
                  </button>
                ) : null}

                {Array.from({ length: numberOfPage }, (_, index) => (
                  <button
                    key={index}
                    value={index + 1}
                    onClick={handlePage}
                    aria-current="page"
                    className={
                      currentPage == index + 1
                        ? PaginationClassify.current
                        : PaginationClassify.not
                    }
                  >
                    {index + 1}
                  </button>
                ))}

                {numberOfPage != 1 ? (
                  <button
                    value={
                      currentPage * 1 + 1 > numberOfPage
                        ? 1
                        : currentPage * 1 + 1
                    }
                    onClick={handlePage}
                    className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    {" "}
                    Next
                    {/* <span className="sr-only">Next</span>
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clip-rule="evenodd"
                      />
                    </svg> */}
                  </button>
                ) : null}
              </nav>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Pagination;

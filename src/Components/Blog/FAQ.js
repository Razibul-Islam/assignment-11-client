import React from 'react';

const FAQ = () => {
    return (
      <section className="dark:bg-gray-800 dark:text-gray-100 mb-20">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
            <div>
              <h3 className="font-semibold">
                Difference between SQL and NoSQL.
              </h3>
              <p className="mt-1 dark:text-gray-400">
                SQL is the programming language used to interface with
                relational databases. (Relational databases model data as
                records in rows and tables with logical links between them).
                NoSQL is a class of DBMs that are non-relational and generally
                do not use SQL.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                What is JWT, and how does it work?
              </h3>
              <p className="mt-1 dark:text-gray-400">
                What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open
                standard (RFC 7519) for securely transmitting information
                between parties as JSON object. It is compact, readable and
                digitally signed using a private key/ or a public key pair by
                the Identity Provider(IdP).
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                What is the difference between javascript and NodeJS?
              </h3>
              <p className="mt-1 dark:text-gray-400">
                JavaScript is a simple programming language that can be used
                with any browser that has the JavaScript Engine installed. Node.
                js, on the other hand, is an interpreter or execution
                environment for the JavaScript programming language.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                How does NodeJS handle multiple requests at the same time?
              </h3>
              <p className="mt-1 dark:text-gray-400">
                How NodeJS handle multiple client requests? NodeJS receives
                multiple client requests and places them into EventQueue. NodeJS
                is built with the concept of event-driven architecture. NodeJS
                has its own EventLoop which is an infinite loop that receives
                requests and processes them.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default FAQ;
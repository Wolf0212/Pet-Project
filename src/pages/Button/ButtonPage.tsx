import Button from "../../components/ui/Button/Button";
import RouteWrapper from "../../components/ui/RouteWrapper/RouteWrapper";

const ButtonPage = () => {
  return (
    <RouteWrapper>
      <div className="flex gap-4">
        <main className="flex flex-col grow items-center">
          <div className="w-full max-w-6xl">
            <h1 className="mb-10">Button</h1>
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="mb-4">Sizes</h2>
                <div className="p-6 border border-neutral-300 dark:border-neutral-700 rounded-md flex gap-4">
                  <div>
                    <Button size="small">Small</Button>
                  </div>
                  <div>
                    <Button>Medium</Button>
                  </div>
                  <Button size="large">Large</Button>
                </div>
              </div>
              <div>
                <h2 className="mb-4">Outlined button</h2>
                <div className="p-6 border border-neutral-300 dark:border-neutral-700 rounded-md flex gap-4">
                  <Button>Primary</Button>
                  <Button color="secondary">Secondary</Button>
                  <Button color="success">Success</Button>
                  <Button color="warning">Warning</Button>
                  <Button isError>Error</Button>
                  <Button isDisabled>Disabled</Button>
                  <Button isLoading>Loading</Button>
                </div>
              </div>
              <div>
                <h2 className="mb-4">Filled button</h2>
                <div className="p-6 border border-neutral-300 dark:border-neutral-700 rounded-md flex gap-4">
                  <Button>Primary</Button>
                  <Button color="secondary">Secondary</Button>
                  <Button color="success">Success</Button>
                  <Button color="warning">Warning</Button>
                  <Button isError>Error</Button>
                  <Button isDisabled>Disabled</Button>
                  <Button isLoading>Loading</Button>
                </div>
              </div>
              <div>
                <h2 className="mb-4">Text button</h2>
                <div className="p-6 border border-neutral-300 dark:border-neutral-700 rounded-md flex gap-4">
                  <Button>Primary</Button>
                  <Button color="secondary">Secondary</Button>
                  <Button color="success">Success</Button>
                  <Button color="warning">Warning</Button>
                  <Button isError>Error</Button>
                  <Button isDisabled>Disabled</Button>
                  <Button isLoading>Loading</Button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <nav className="page-navigation min-w-[200px] hidden md:block border-l pl-4 border-neutral-300 dark:border-neutral-700">page navigation</nav>
      </div>
    </RouteWrapper>
  );
};

export default ButtonPage;

import { CompaniesTable } from './components/CompaniesTable';
import { Modal } from '@components/Modal';

export default async function Companies() {
  return (
    <div>
      <main>
        <div className="flex justify-between items-center">
          <h1 className="font-semibold dark:text-gray-100">Companies</h1>
          <button
            type="button"
            className="px-6 py-2 font-semibold rounded-full dark:bg-violet-400 dark:text-gray-900"
          >
            Add
          </button>
        </div>

        <CompaniesTable />
        <Modal
          isOpen={false}
          header="Add company"
          body="Body modal"
          footer={
            <>
              <button className="px-6 py-2 rounded-sm">No</button>
              <button className="px-6 py-2 rounded-sm shadow-sm dark:bg-violet-400 dark:text-gray-900">
                Yes
              </button>
            </>
          }
        />
      </main>
    </div>
  );
}

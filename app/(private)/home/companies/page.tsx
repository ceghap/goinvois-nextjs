import { CompaniesTable } from './CompaniesTable';
import { CompaniesSectionHeader } from './CompaniesSectionHeader';

export default async function Companies() {
  return (
    <>
      <div>
        <main>
          <CompaniesSectionHeader title="Companies" />
          <CompaniesTable />
        </main>
      </div>
    </>
  );
}

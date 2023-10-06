import CreateForm from './create-form';

export default async function CreateTicket() {
  return (
    <main>
      <h3 className="pb-6 text-3xl font-semibold text-neutral-900">
        Create ticket
      </h3>
      <CreateForm />
    </main>
  );
}

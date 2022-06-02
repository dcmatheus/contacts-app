import ContactsList from 'templates/ContactsList';
import Header from 'templates/Header';
import ContactsPageTitle from 'templates/ContactsPageTitle';

function ContactsPage() {
  return (
    <div className="flex flex-col items-center w-screen h-screen md:bg-themeNeutral-300">
      <Header path="/login" text="Listagem de usuários" />
      <div className="w-full md:bg-white lg:w-11/12 md:h-full md:rounded-lg md:my-7 md:shadow-md">
        <div className="mx-4 md:mx-10">
          <ContactsPageTitle />
          <ContactsList />
        </div>
      </div>
    </div>
  );
}

export default ContactsPage;

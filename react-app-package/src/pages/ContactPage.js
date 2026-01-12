const ContactPage = () => {
  return (
    <div className='text-center p-2 m-5'>
      <h1 className='text-3xl font-bold'>Contact Us Page</h1>

      <form
        onSubmit={(e) => e.preventDefault()}
        className='mt-5 flex flex-col m-auto w-3/12'
      >
        <input
          type='text'
          placeholder='name'
          className='p-2 border-2 rounded-lg my-2'
        />
        <input
          type='email'
          placeholder='email'
          className='p-2 border-2 rounded-lg my-2'
        />

        <textarea
          rows={5}
          cols={30}
          type='text'
          placeholder='message'
          className='p-2 border-2 rounded-lg my-2'
        />

        <button
          type='submit'
          className='p-2 border-2 border-black bg-green-600 rounded-lg my-2 cursor-pointer'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;

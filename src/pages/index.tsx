import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const HomePage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [link, setLink] = useState("");

  const linkGenerator = () => {
    setLink(`https://wa.me/send?phone=${phoneNumber}&text=${message}`);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    linkGenerator();
  };

  return (
    <main className="flex flex-col w-screen h-screen items-center justify-center">
      <section className="p-5 bg-white rounded shadow w-3/4 mx-auto">
        <h1 className="font-bold text-2xl text-gray-800 text-center">Gerador de Link para WhatsApp</h1>
        <form className="text-gray-800" onSubmit={(e) => handleSubmit(e)}>
          <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} id="phoneNumber" name="phoneNumber" type="text" placeholder="Digite o número do telefone" className="w-full p-2 border border-gray-300 rounded mt-5" />
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Digite a mensagem" className="w-full p-2 border border-gray-300 rounded mt-5" />
          <input type="submit" value="Gerar Link" className="w-full p-2 bg-blue-500 text-white rounded mt-5" />
        </form>
      </section>

      {link &&
        <section className="p-5 bg-white rounded shadow w-3/4 mx-auto mt-5">
          <h1 className="font-bold text-2xl text-gray-800 text-center">Link Gerado</h1>
          <CopyToClipboard text={link}>
            <h2 className="text-gray-600">{link}</h2>
          </CopyToClipboard>
        </section>
      }
    </main>
  )
}

export default HomePage;
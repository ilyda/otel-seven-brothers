
import PageBanner from "../components/PageBanner";
import { FileText, Download } from "lucide-react";

export default function Documents() {
const documents = [
  {
    title: "Turizm İşletme Belgesi",
    file: "/surdulenir.docx",
  },
    {
    title: "Sıfır Atık Belgesi",
    file: "/sıfır-atik.pdf",
  }
 
];

  return (
    <div className="min-h-screen">
      <PageBanner title="Belgelerimiz" />

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-6">

          {documents.map((doc, i) => (
            <div
              key={i}
              className="flex items-center justify-between border border-gray-200 rounded-xl p-5 hover:shadow-md transition"
            >
              <div className="flex items-center gap-4">
                <FileText size={26} className="text-gray-600" />

                <span className="text-gray-800 font-medium">
                  {doc.title}
                </span>
              </div>

              <a
                href={doc.file}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
              >
                <Download size={16} />
                Görüntüle
              </a>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
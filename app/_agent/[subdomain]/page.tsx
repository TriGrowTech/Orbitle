export default function AgentWebsite({ params }: { params: { subdomain: string } }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 flex-col">
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-lg w-full text-center border top-4 border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">🎈 It Works!</h1>
        <p className="text-gray-600 mb-6">
          You are viewing the agent website for:<br />
          <strong className="text-blue-600 text-xl block mt-2">{params.subdomain}.localhost:3000</strong>
        </p>
        <p className="text-sm text-gray-500">
          In the future, this page will fetch the details for <b>{params.subdomain}</b> from the backend API and render their beautiful customized travel website here.
        </p>
      </div>
    </div>
  );
}

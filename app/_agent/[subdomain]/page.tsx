import AgentMarketplaceClient from './AgentMarketplaceClient';

// Server component — fetch data server-side for SEO
async function getAgentData(subdomain: string) {
  try {
    const res = await fetch(
      `http://localhost:5000/api/public/agent/${subdomain}`,
      { cache: 'no-store' }
    );
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: { subdomain: string } }) {
  const data = await getAgentData(params.subdomain);
  if (!data?.success) {
    return { title: 'Agent Not Found — Orbitle' };
  }
  const agent = data.agent;
  return {
    title: `${agent.businessName || agent.name} — Travel Packages`,
    description: agent.tagline || `Explore travel packages by ${agent.businessName || agent.name}`,
  };
}

export default async function AgentMarketplacePage({ params }: { params: { subdomain: string } }) {
  const data = await getAgentData(params.subdomain);
  return (
    <AgentMarketplaceClient
      subdomain={params.subdomain}
      initialData={data}
    />
  );
}

import { getAllModels } from "../lib/models";

export default async function ThreeDModelPage() {
  const models = await getAllModels();
  return models.map((model) => <p key={model.id}>{model.name}</p>);
}

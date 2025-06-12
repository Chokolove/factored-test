import { StarshipProperties } from "@/types";

interface StarshipCardProps {
  starship: StarshipProperties;
}
export default function StarshipCard({ starship }: StarshipCardProps) {
  return (
    <div className="bg-white/5 border border-white/20 rounded-lg shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm p-3 w-full h-[330px] overflow-hidden text-white space-y-1">
      <h2 className="text-lg font-semibold">{starship.name}</h2>
      <p className="text-xs text-white/60 italic">
        {starship.model} — {starship.starship_class}
      </p>

      <div className="overflow-y-auto max-h-[250px] pr-1 mt-2 text-xs grid grid-cols-2 gap-1">
        <div>
          <strong>Manufacturer:</strong> {starship.manufacturer}
        </div>
        <div>
          <strong>Cost:</strong> {starship.cost_in_credits} credits
        </div>
        <div>
          <strong>Length:</strong> {starship.length} m
        </div>
        <div>
          <strong>Crew:</strong> {starship.crew}
        </div>
        <div>
          <strong>Passengers:</strong> {starship.passengers}
        </div>
        <div>
          <strong>Hyperdrive:</strong> {starship.hyperdrive_rating}
        </div>
        <div>
          <strong>MGLT:</strong> {starship.MGLT}
        </div>
        <div>
          <strong>Speed:</strong> {starship.max_atmosphering_speed} km/h
        </div>
        <div>
          <strong>Consumables:</strong> {starship.consumables}
        </div>
        <div>
          <strong>Cargo:</strong> {starship.cargo_capacity} kg
        </div>
      </div>
    </div>
  );
}

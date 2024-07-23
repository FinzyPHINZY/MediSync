import clsx from "clsx";
import Image from "next/image";

interface StatCardProps {
  type: "appointment" | "pending" | "cancelled";
  count: number;
  label: string;
  icon: string;
}
const StatCard = ({ type, count = 0, icon, label }: StatCardProps) => {
  return (
    <div
      className={clsx("stat-card", {
        "bg-appointments": type === "appointment",
        "bg-pending": type === "pending",
        "bg-cancelled": type === "cancelled",
      })}
    >
      <div className="flex gap-4 items-center">
        <Image
          src={icon}
          width={32}
          height={32}
          alt="label"
          className="size-8 w-fit"
        />
        <h2 className="text-32-bold text-white">{count}</h2>
      </div>

      <p className="text-14-regular">{label}</p>
    </div>
  );
};

export default StatCard;

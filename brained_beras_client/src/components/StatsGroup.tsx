import { Clock, lockIcon, Padlock1, Padlock2, StatIconType } from "../assets";

interface StatCardProps {
  title: string;
  value: string;
  icon: StatIconType;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon }) => (
  <div className="p-3 border rounded-[16px] shadow-[4px_4px_0px_0px]">
    <h3 className="text-[16px] mb-3">{title}</h3>
    <div className="flex justify-between items-center">
      <p className="text-[20px] font-[400]">{value}</p>
      <span className="w-[30px] h-[30px] flex items-center rounded-[10px] border justify-center bg-[#F4EBCE]">
        <img src={Icon} alt={`${title} icon`} />
      </span>
    </div>
  </div>
);

interface StatsData {
  title: string;
  value: string;
  icon: StatIconType;
}

const StatsGroup: React.FC = () => {
  const statsData: StatsData[] = [
    { title: "Total $Braind Bears", value: "0000", icon: lockIcon },
    { title: "Available Brained", value: "0000", icon: Padlock1 },
    { title: "Allocated Brained", value: "0000", icon: Padlock2 },
    { title: "Redeeming Brained", value: "0000", icon: Clock },
  ];

  return (
    <div className="bg-white p-4 lg:py-6 pb-4 rounded-[24px] border-2">
      <h1
        style={{ fontFamily: "Hamish" }}
        className="text-[24px] lg:text-[33px] mb-3"
      >
        STATS
      </h1>

      <section className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {statsData.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
          />
        ))}
      </section>
    </div>
  );
};

export default StatsGroup;

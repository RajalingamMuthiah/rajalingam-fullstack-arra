import { Brain, Eye, Code2, Database, Wrench } from "lucide-react";
import Card from "./Card";
import { skillGroups } from "../../data/portfolio";

const ICONS = { brain: Brain, eye: Eye, code: Code2, database: Database, wrench: Wrench };

/** Grouped skills from data/portfolio.js — used on Home and Resume. */
const SkillGroupsGrid = () => (
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {skillGroups.map(({ title, icon, items }) => {
      const Icon = ICONS[icon] ?? Code2;
      return (
        <Card key={title} glow hover={false} className="h-full">
          <h3 className="flex items-center gap-3 text-lg font-bold mb-4">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
              <Icon className="w-5 h-5 text-white" aria-hidden="true" />
            </span>
            <span className="gradient-text">{title}</span>
          </h3>
          <ul className="flex flex-wrap gap-2">
            {items.map((item) => (
              <li
                key={item}
                className="px-3 py-1 rounded-lg text-sm font-medium bg-white/5 border border-white/10"
              >
                {item}
              </li>
            ))}
          </ul>
        </Card>
      );
    })}
  </div>
);

export default SkillGroupsGrid;

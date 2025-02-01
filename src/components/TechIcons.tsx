// src/components/TechIcons.tsx
import { SiMongodb, SiPostgresql, SiIntellijidea, SiSpringboot, SiKotlin, SiLinux, SiPython,
    SiMysql, SiAwselasticloadbalancing, SiDocker, SiAndroidstudio, SiGit, SiApachekafka, SiRedhatopenshift, SiRedis, 
 } from 'react-icons/si';

const TechIcons = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mt-8 justify-center">
      {/* MongoDB */}
      <div className="flex justify-center items-center opacity-80 hover:opacity-100 transition-opacity">
        <SiMongodb size={40} className="text-green-600" />
      </div>

      {/* PostgreSQL */}
      <div className="flex justify-center items-center opacity-80 hover:opacity-100 transition-opacity">
        <SiPostgresql size={40} className="text-blue-600" />
      </div>

      {/* Intellij IDEA */}
      <div className="flex justify-center items-center opacity-80 hover:opacity-100 transition-opacity">
        <SiIntellijidea size={40} className="text-red-600" />
      </div>

      {/* Kotlin */}
      <div className="flex justify-center items-center opacity-80 hover:opacity-100 transition-opacity">
        <SiKotlin size={40} className="text-purple-600" />
      </div>

      {/* Springboot */}
      <div className="flex justify-center items-center opacity-80 hover:opacity-100 transition-opacity">
        <SiSpringboot size={40} className="text-purple-600" />
      </div>

      {/* Linux */}
      <div className="flex justify-center items-center opacity-80 hover:opacity-100 transition-opacity">
        <SiLinux size={40} className="text-black" />
      </div>

      {/* Python  */}
      <div className="flex justify-center items-center opacity-80 hover:opacity-100 transition-opacity">
        <SiPython size={40} className="text-red-600" />
      </div>

      {/* SQL */}
      <div className="flex justify-center items-center opacity-80 hover:opacity-100 transition-opacity">
        <SiMysql size={40} className="text-purple-600" />
      </div>

      {/* Elastic Loadbalancing */}
      <div className="flex justify-center items-center opacity-80 hover:opacity-100 transition-opacity">
        <SiAwselasticloadbalancing size={40} className="text-purple-600" />
      </div>

      {/* Docker */}
      <div className="flex justify-center items-center opacity-80 hover:opacity-100 transition-opacity">
        <SiDocker size={40} className="text-black" />
      </div>


      ------

      {/* Android Studio */}
      <div className="flex justify-center items-center opacity-80 hover:opacity-100 transition-opacity">
        <SiAndroidstudio size={40} className="text-red-600" />
      </div>

      {/* git */}
      <div className="flex justify-center items-center opacity-80 hover:opacity-100 transition-opacity">
        <SiGit size={40} className="text-purple-600" />
      </div>

      {/* Kafka */}
      <div className="flex justify-center items-center opacity-80 hover:opacity-100 transition-opacity">
        <SiApachekafka size={40} className="text-purple-600" />
      </div>

      {/* Redhat openshift */}
      <div className="flex justify-center items-center opacity-80 hover:opacity-100 transition-opacity">
        <SiRedhatopenshift size={40} className="text-black" />
      </div>

            {/* Redis  */}
            <div className="flex justify-center items-center opacity-80 hover:opacity-100 transition-opacity">
        <SiRedis size={40} className="text-black" />
      </div>


      























    </div>
  );
};

export default TechIcons;

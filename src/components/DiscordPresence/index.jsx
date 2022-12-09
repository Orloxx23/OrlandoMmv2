import React from "react";
import axios from "axios";
import "./discord.css";
import discordImg from "../../assets/img/discord.png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { CursorContext } from "../../context/CursorContext";

export default function DiscordPresence({ showNick }) {
  const [discordData, setDiscordData] = React.useState([]);
  const [t, i18n] = useTranslation("global");
  const { setCursorVariant } = React.useContext(CursorContext);

  React.useEffect(() => {
    const getDiscordData = async () => {
      const response = await axios.get(
        "https://discord.com/api/guilds/612349868182077462/widget.json"
      );
      setDiscordData(
        response.data.members.filter((member) => member.username === "Nikkeey")
      );
    };

    getDiscordData();
  }, []);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -250 }}
        animate={{ opacity: 1, y: 0 }}
        onMouseEnter={() => setCursorVariant("dark")}
        onMouseLeave={() => setCursorVariant("default")}
        className="discord-presence-container"
      >
        <div className="discord-presence-content">
          <div className="discord-presence-text">
            {showNick ? (
              <h5>
                Discord: <span>Orloxx#8101</span>
              </h5>
            ) : (
              <h5>Discord</h5>
            )}
            <hr />

            {discordData.length > 0 ? (
              discordData[0].game ? (
                <p>
                  {t("discord.playing")}
                  <span>{discordData[0].game["name"]}</span>
                </p>
              ) : (
                <p>
                  <span>{t("discord.online")}</span>
                </p>
              )
            ) : (
              <p>
                <span>{t("discord.offline")}</span>
              </p>
            )}
          </div>
          <div className="discord-presence-img">
            <img
              draggable="false"
              src={
                discordData.length > 0 ? discordData[0].avatar_url : discordImg
              }
              alt="Nikkeey"
            />
          </div>
          <div
            className={
              discordData.length > 0
                ? "discord-presence-state dp-active"
                : "discord-presence-state dp-desactive"
            }
          ></div>
        </div>
      </motion.div>
    </>
  );
}

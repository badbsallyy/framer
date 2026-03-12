/**
 * @framerDisableUnlink
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight auto
 * @framerIntrinsicWidth 1440
 * @framerIntrinsicHeight 900
 */

import { addPropertyControls, ControlType } from "framer"
import { motion } from "framer-motion"

// ─── Types ────────────────────────────────────────────────────────────────────

interface MenuItem {
    name: string
    description: string
    price: string
}

interface OpeningDay {
    day: string
    hours: string
}

interface Props {
    shopName: string
    tagline: string
    heroImageUrl: string
    accentColor: string
    menuItems: MenuItem[]
    openingHours: OpeningDay[]
    address: string
    phone: string
    orderUrl: string
    style?: React.CSSProperties
}

// ─── Defaults ─────────────────────────────────────────────────────────────────

const defaultMenuItems: MenuItem[] = [
    { name: "Klassischer Döner", description: "Hähnchen, Salat, Tomaten, Zwiebeln, Soße", price: "6,50 €" },
    { name: "Veggie Döner", description: "Halloumi, Grillgemüse, Joghurtsoße, Kräuter", price: "6,00 €" },
    { name: "Dürüm", description: "Gerolltes Fladenbrot, Hähnchen, Frischkäse", price: "7,00 €" },
    { name: "Lahmacun", description: "Türkische Pizza, Hackfleisch, Salat, Zitrone", price: "5,50 €" },
    { name: "Iskender", description: "Döner auf Fladenbrot, Tomatensoße, Butter", price: "9,50 €" },
    { name: "Falafel Box", description: "Kichererbsen, Tahini, eingelegtes Gemüse", price: "7,50 €" },
]

const defaultHours: OpeningDay[] = [
    { day: "Mo – Fr", hours: "11:00 – 22:00" },
    { day: "Samstag", hours: "12:00 – 23:00" },
    { day: "Sonntag", hours: "13:00 – 21:00" },
]

// ─── Animations ───────────────────────────────────────────────────────────────

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    }),
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function MenuCard({ item, accent, index }: { item: MenuItem; accent: string; index: number }) {
    return (
        <motion.div
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            style={{
                background: "#fff",
                borderRadius: 16,
                padding: "28px 28px 24px",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
                border: "1px solid #f0ede9",
                cursor: "default",
            }}
        >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 18, fontWeight: 700, color: "#1a1a18", lineHeight: 1.3 }}>
                    {item.name}
                </span>
                <span style={{
                    fontFamily: "'DM Mono', 'Courier New', monospace",
                    fontSize: 15,
                    fontWeight: 600,
                    color: accent,
                    whiteSpace: "nowrap",
                    marginTop: 2,
                }}>
                    {item.price}
                </span>
            </div>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#8a8279", lineHeight: 1.5 }}>
                {item.description}
            </span>
        </motion.div>
    )
}

function HourRow({ day, index }: { day: OpeningDay; index: number }) {
    return (
        <motion.div
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "14px 0",
                borderBottom: "1px solid rgba(255,255,255,0.12)",
            }}
        >
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "rgba(255,255,255,0.7)" }}>{day.day}</span>
            <span style={{ fontFamily: "'DM Mono', 'Courier New', monospace", fontSize: 15, color: "#fff", fontWeight: 500 }}>{day.hours}</span>
        </motion.div>
    )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function DoenerLandingPage(props: Props) {
    const {
        shopName = "Döner Haus",
        tagline = "Frisch. Handgemacht. Unwiderstehlich.",
        heroImageUrl = "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=1600&q=80",
        accentColor = "#D4622A",
        menuItems = defaultMenuItems,
        openingHours = defaultHours,
        address = "Hauptstraße 42, 40213 Düsseldorf",
        phone = "+49 211 123 456",
        orderUrl = "#",
        style,
    } = props

    return (
        <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#FAF8F5", ...style }}>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@500&display=swap');
                * { box-sizing: border-box; margin: 0; padding: 0; }
                html { scroll-behavior: smooth; }
            `}</style>

            {/* NAV */}
            <nav style={{
                position: "sticky",
                top: 0,
                zIndex: 100,
                background: "rgba(250,248,245,0.92)",
                backdropFilter: "blur(12px)",
                borderBottom: "1px solid #ede9e3",
                padding: "0 48px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: 64,
            }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 900, color: "#1a1a18", letterSpacing: "-0.5px" }}>
                    {shopName}
                </span>
                <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
                    {["Menü", "Öffnungszeiten", "Kontakt"].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#5c5852", textDecoration: "none", letterSpacing: "0.02em" }}>
                            {item}
                        </a>
                    ))}
                    <a href={orderUrl} style={{
                        background: accentColor,
                        color: "#fff",
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 14,
                        fontWeight: 600,
                        padding: "9px 20px",
                        borderRadius: 8,
                        textDecoration: "none",
                    }}>
                        Bestellen →
                    </a>
                </div>
            </nav>

            {/* HERO */}
            <section style={{ position: "relative", height: "92vh", minHeight: 600, overflow: "hidden" }}>
                <img
                    src={heroImageUrl}
                    alt="Hero"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                />
                <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to bottom, rgba(10,8,5,0.18) 0%, rgba(10,8,5,0.62) 100%)",
                }} />
                <div style={{
                    position: "absolute", inset: 0,
                    display: "flex", flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "0 80px 80px",
                }}>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 720 }}
                    >
                        <span style={{
                            display: "inline-flex", alignItems: "center", gap: 6,
                            background: "rgba(255,255,255,0.15)",
                            backdropFilter: "blur(8px)",
                            border: "1px solid rgba(255,255,255,0.25)",
                            color: "#fff",
                            fontSize: 12,
                            fontWeight: 600,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            padding: "6px 14px",
                            borderRadius: 100,
                            width: "fit-content",
                        }}>
                            🥙 Frisch täglich zubereitet
                        </span>
                        <h1 style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                            fontSize: "clamp(52px, 7vw, 96px)",
                            fontWeight: 900,
                            color: "#fff",
                            lineHeight: 1.0,
                            letterSpacing: "-2px",
                        }}>
                            {shopName}
                        </h1>
                        <p style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: 20,
                            color: "rgba(255,255,255,0.78)",
                            lineHeight: 1.5,
                            maxWidth: 480,
                        }}>
                            {tagline}
                        </p>
                        <div style={{ display: "flex", gap: 14, marginTop: 8 }}>
                            <a href="#menü" style={{
                                background: accentColor,
                                color: "#fff",
                                fontFamily: "'DM Sans', sans-serif",
                                fontWeight: 600,
                                fontSize: 16,
                                padding: "14px 32px",
                                borderRadius: 10,
                                textDecoration: "none",
                            }}>
                                Zur Speisekarte
                            </a>
                            <a href={orderUrl} style={{
                                background: "rgba(255,255,255,0.15)",
                                backdropFilter: "blur(8px)",
                                border: "1px solid rgba(255,255,255,0.3)",
                                color: "#fff",
                                fontFamily: "'DM Sans', sans-serif",
                                fontWeight: 500,
                                fontSize: 16,
                                padding: "14px 32px",
                                borderRadius: 10,
                                textDecoration: "none",
                            }}>
                                Online Bestellen
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* MENU */}
            <section id="menü" style={{ padding: "96px 80px", background: "#FAF8F5" }}>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: 56 }}
                >
                    <span style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: 12,
                        fontWeight: 500,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: accentColor,
                        display: "block",
                        marginBottom: 12,
                    }}>
                        Speisekarte
                    </span>
                    <h2 style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: "clamp(36px, 4vw, 56px)",
                        fontWeight: 900,
                        color: "#1a1a18",
                        letterSpacing: "-1px",
                        lineHeight: 1.1,
                    }}>
                        Unsere Klassiker
                    </h2>
                </motion.div>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                    gap: 20,
                }}>
                    {menuItems.map((item, i) => (
                        <MenuCard key={i} item={item} accent={accentColor} index={i} />
                    ))}
                </div>
            </section>

            {/* HOURS + CONTACT */}
            <section id="öffnungszeiten" style={{
                background: "#1a1a18",
                padding: "96px 80px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 80,
                alignItems: "start",
            }}>
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ marginBottom: 40 }}
                    >
                        <span style={{
                            fontFamily: "'DM Mono', monospace",
                            fontSize: 12,
                            fontWeight: 500,
                            letterSpacing: "0.15em",
                            textTransform: "uppercase",
                            color: accentColor,
                            display: "block",
                            marginBottom: 12,
                        }}>
                            Öffnungszeiten
                        </span>
                        <h2 style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                            fontSize: 40,
                            fontWeight: 900,
                            color: "#fff",
                            letterSpacing: "-1px",
                            lineHeight: 1.1,
                        }}>
                            Wir sind für dich da
                        </h2>
                    </motion.div>
                    {openingHours.map((day, i) => (
                        <HourRow key={i} day={day} index={i} />
                    ))}
                </div>

                <div id="kontakt">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        style={{ marginBottom: 40 }}
                    >
                        <span style={{
                            fontFamily: "'DM Mono', monospace",
                            fontSize: 12,
                            fontWeight: 500,
                            letterSpacing: "0.15em",
                            textTransform: "uppercase",
                            color: accentColor,
                            display: "block",
                            marginBottom: 12,
                        }}>
                            Kontakt & Standort
                        </span>
                        <h2 style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                            fontSize: 40,
                            fontWeight: 900,
                            color: "#fff",
                            letterSpacing: "-1px",
                            lineHeight: 1.1,
                        }}>
                            Komm vorbei
                        </h2>
                    </motion.div>
                    {[
                        { icon: "📍", label: "Adresse", value: address },
                        { icon: "📞", label: "Telefon", value: phone },
                    ].map((info, i) => (
                        <motion.div
                            key={i}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            style={{
                                display: "flex",
                                gap: 16,
                                alignItems: "flex-start",
                                padding: "20px 0",
                                borderBottom: "1px solid rgba(255,255,255,0.12)",
                            }}
                        >
                            <span style={{ fontSize: 20 }}>{info.icon}</span>
                            <div>
                                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>
                                    {info.label}
                                </div>
                                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "#fff" }}>
                                    {info.value}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    <motion.div
                        custom={3}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        style={{
                            marginTop: 32,
                            background: "rgba(255,255,255,0.06)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: 12,
                            height: 180,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "rgba(255,255,255,0.3)",
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: 14,
                        }}
                    >
                        🗺 Kartenansicht hier einbetten
                    </motion.div>
                </div>
            </section>

            {/* FOOTER */}
            <footer style={{
                background: "#111110",
                padding: "28px 80px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 900, color: "#fff" }}>
                    {shopName}
                </span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.35)" }}>
                    © {new Date().getFullYear()} {shopName} · Alle Rechte vorbehalten
                </span>
            </footer>

        </div>
    )
}

// ─── Default Props ────────────────────────────────────────────────────────────

DoenerLandingPage.defaultProps = {
    shopName: "Döner Haus",
    tagline: "Frisch. Handgemacht. Unwiderstehlich.",
    heroImageUrl: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=1600&q=80",
    accentColor: "#D4622A",
    menuItems: defaultMenuItems,
    openingHours: defaultHours,
    address: "Hauptstraße 42, 40213 Düsseldorf",
    phone: "+49 211 123 456",
    orderUrl: "#",
}

// ─── Property Controls ────────────────────────────────────────────────────────

addPropertyControls(DoenerLandingPage, {
    shopName: {
        type: ControlType.String,
        title: "Ladenname",
        defaultValue: "Döner Haus",
    },
    tagline: {
        type: ControlType.String,
        title: "Tagline",
        defaultValue: "Frisch. Handgemacht. Unwiderstehlich.",
    },
    heroImageUrl: {
        type: ControlType.String,
        title: "Hero Bild URL",
    },
    accentColor: {
        type: ControlType.Color,
        title: "Akzentfarbe",
        defaultValue: "#D4622A",
    },
    orderUrl: {
        type: ControlType.String,
        title: "Bestell-Link",
        defaultValue: "#",
    },
    address: {
        type: ControlType.String,
        title: "Adresse",
    },
    phone: {
        type: ControlType.String,
        title: "Telefon",
    },
    menuItems: {
        type: ControlType.Array,
        title: "Menüpunkte",
        control: {
            type: ControlType.Object,
            controls: {
                name: { type: ControlType.String, title: "Name" },
                description: { type: ControlType.String, title: "Beschreibung" },
                price: { type: ControlType.String, title: "Preis" },
            },
        },
    },
    openingHours: {
        type: ControlType.Array,
        title: "Öffnungszeiten",
        control: {
            type: ControlType.Object,
            controls: {
                day: { type: ControlType.String, title: "Tag" },
                hours: { type: ControlType.String, title: "Uhrzeit" },
            },
        },
    },
})

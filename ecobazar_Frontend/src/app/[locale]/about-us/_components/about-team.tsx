// src/components/about/about-team.tsx
import Image from "next/image"

const teamMembers = [
    { name: "Jenny Wilson", role: "Ceo & Founder", image: "/images/about/team-1.svg" },
    { name: "Jane Cooper", role: "Worker", image: "/images/about/team-2.svg" },
    { name: "Cody Fisher", role: "Security Guard", image: "/images/about/team-3.svg" },
    { name: "Robert Fox", role: "Senior Farmer", image: "/images/about/team-4.svg" },
]

export const AboutTeam = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center max-w-xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Awesome Team</h2>
                    <p className="text-sm text-gray-500">
                        Pellentesque a massa egestas, sodales sapien egestas, porta tellus.
                        Pellentesque sollicitudin id nunc ac semper.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
                        >
                            <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-gray-900 text-base">{member.name}</h3>
                                <p className="text-xs text-gray-400 capitalize">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
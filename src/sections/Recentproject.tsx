
import React from 'react'
import Tag from "@/components/Tag";


const Recentproject = () => {
  return (
    <section  className="py-24 overflow-x-clip">
        <div className="container">
             <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                    <div>
                        <Tag>Projects</Tag>
                        <h2 className="text-6xl font-medium mt-6">
                        Small Section of {" "}
                            <span className="text-lime-400 ">Projects</span>
                        </h2>
 
                        <p className="text-white/50 mt-4 text-lg ">
                            AR seamessly connects with your favourite tools
                            and platforms. Its easy to plug into any workflow
                            and collaborate platforms.
                        </p>
                    </div>
                    <div>
                         <div className="grid md:grid-cols-2 gap-4 lg:h-[800px] h-[400px] lg:mt-0 mt-8 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                           
                        </div>
                    </div>
                </div>
        </div>
    </section>
  )
}

export default Recentproject

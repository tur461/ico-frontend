"use client"
import Image from "next/image";
import "./../../components/css/policy.scss";
import "./styles.scss";
// import Stone from "../../assets/images/stone.jpeg"
import { usePathname,useRouter,useParams } from 'next/navigation';

import Climate from "../../assets/images/climate.jpeg";
import Fire from "../../assets/images/fire.png";
import Sustainability from "../../assets/images/sustainability.jpg";
import parse from 'html-react-parser';

const BlogView = () => {
    const params=useParams();
    const titleArr = [
        'A climate for economic renewal<br/><br/>',
        'Act as if your house is on fire. Because it is!<br/><br/>',
        'Investing in sustainable climate solutions<br/><br/>'
    ]

    const contentText1 = [
	    "Crypto can give the climate finance market the boost it desperately needs –",
	    "The window for preventative action is closing –",
	    "We cannot reach any of our climate goals without indigenous peoples –",

    ]
    
    const contentText2 = [
	    "So, who would’ve believed it? The beleaguered, seemingly lame-duck president Joe Biden and his Democrat colleagues managed to steer legislation through Congress that mandates the largest climate investment programme in US history. Cue a collective sigh of relief, and celebrations from the Democrats and climate-aware. <br/><br/>‘Imperfect’ as even its supporters describe it, the Inflation Reduction Act was hailed as a major step towards sustainability for the world’s greatest per-capita emitter. And hidden away in the bill’s detail is provision for a $27bn Greenhouse Gas Reduction Fund, to be invested via a network of local ‘green’ banks, something US environmental campaigners have agitated for for years.<br/><br/> The act’s passing was an enormous victory precisely because it happened despite the implacable opposition of fossil fuel interests. So there’s no doubt that it’s a great achievement and the result is a genuinely new development in the US’s journey towards sustainability. For now, at least, that journey has renewed energy.",
	    "Not a day goes by without us being bombarded with reports of extreme weather events. The world is beset with hurricanes, floods, drought and heatwaves. We are confronted by images of melting glaciers, loss of habitats and global health emergencies. Yet solutions seem thin on the ground.<br/><br/> This summer’s extreme weather event hit the global North, including my own city, London. Images of homes and factories ablaze appeared widely across the media. <br/><br/>Temperatures rose to 40oC and above in England. But, while much of the global North is burning, most of the global South is under water. <br/><br/>And as the world’s media covered the raging furness, the famous words of climate activist Greta Thunberg came back to me: “Act as if your house is on fire. Because it is.”",
	    "David Kaimowitz is senior forestry officer of the UN Food & Agriculture Organisation. Like many in the sustainability field, he says we must invest in indigenous peoples if the UN’s sustainable development goals are to be achieved.<br/><br/> Indigenous peoples play a critical role in stewarding the environment and combatting climate change and its impacts. It’s a role that the scientific community see as key to developing and implementing national climate action plans (NDCs) and national adaptation plans (NAPs) under the Paris Agreement.<br/><br/> David writes: “The deeply-intertwined and rapidly-worsening climate and biodiversity crises have started to convince major philanthropists of the need to take action and put indigenous peoples and local communities in the driving seat.<br/><br/> “We simply cannot reach any climate goals without protecting and sustainably-managing our natural resources, and we cannot do this without indigenous peoples.”<br/><br/> While extreme weather events increasingly dominate the headlines – hurricanes and typhoons, rising sea levels, floods, droughts – the quieter, more profound long-term effects of ecological destruction and climate change disproportionally impact indigenous communities.<br/><br/> Living sustainably, often on sites that harbour precious metals and minerals, indigenous peoples help protect a whopping 80% of the world’s biodiversity, despite representing only 5% of the global population. <br/><br/>For a vast number, the impacts of climate change are already a harsh reality and is clearly not just an environmental issue, but one with severe socioeconomic implications. It is safe to say those peoples on the front line are faring the worst.",

    ]
    // const arr=contentText2.split("\n");

    const contentText3 = [
	    "Rising emissions",
	    "Adaption",
	    "Sustainable management",

    ]

    const contentText4 = [
	    "But that victory is not enough. Because, on the debit side, the global context is still one of strongly-rising emissions of carbon and other greenhouse gases. It’s driven by China’s continuing industrialisation and boosted by Putin’s war in Ukraine – as well as rapidly-melting ice sheets, collapsing ecosystems and the approach of tipping points. <br/><br/>Events in Brazil and the ongoing destruction of the Amazon rainforest shows that, despite the science and the growing tide of extreme weather events, humanity still does not have the will or focus to address the greatest existential threat our species has ever faced.<br/><br/> And, so, the truth remains that if humanity is to divert itself away from the worst climate-breakdown scenario – or, at the very least, fund adaptation as well as mitigation – ‘The Market’ must be reshaped so such ‘victories’ are not merely commonplace, but the normal way of doing things.",
	    "Climate change is the greatest existential threat our species and our ecosystems have ever faced. Global temperatures and sea levels are on the rise. Floods, heatwaves and droughts are becoming more frequent and more severe.<br/><br/> But there is little sign that humanity is taking its foot off the gas. The rapidly-expanding world population, and its growing thirst for fossil fuels, is still relentlessly increasing greenhouse gas emissions.<br/><br/> The injustice of this is clear. It’s those rural, often poor and indigenous communities – the people on the climate change front line – who are suffering the most. Such communities have always led low-carbon, traditional lives and are not responsible for destabilising the climate. <br/><br/>These communities have the best solutions for adapting to the crisis, yet it is precisely the same communities who need the most support if they are to rise to the challenge, a fact that the Intergovernmental Panel on Climate Change (IPCC) has woken up to.<br/><br/> Whole societies and ecosystems are increasingly affected by the changing climate, but those on the climate frontline have largely gone unheard. Their plight rarely makes it onto the global news feed in the same way as my own climate emergency has here in London.",
	    "There are more than 476m people of indigenous origin living in 70 countries across the planet. The UN Declaration on the Rights of Indigenous People recognises the critical knowledge, practices and cultural customs which contribute to sustainable management of the world’s natural resources.<br/><br/> The differentiated approach to nature presupposes “an intrinsic interconnection between humans and the environment, has much to teach us from the West”, says Dr Carolina Comandulli, who has a PhD in anthropology from University College London. <br/><br/>That teaching points to a “path we should follow if we are to break off or survive a sixth mass species extinction: it advises that looking after all living beings – whether that is plants, animals or mountains – should be our central focus.”<br/><br/> And Dr Comandulli should know. She has been involved with indigenous peoples in the Amazon and Atlantic rainforests since the early 2000s. She has occupied several key positions, notably at the National Foundation for Indigenous Affairs (FUNAI), the Extreme Citizen Science (ExCiteS) research group and of the Centre for the Anthropology of Sustainability (CAoS).<br/><br/> Co-founder of Closer, a multidisciplinary research group on Brazilian socio-environmental research, Dr Comandulli has also acted as a consultant for many NGOs and currently works for the philanthropy sector.<br/><br/> And Dr Comandulli adds: “Climate negotiations can neither overlook nor diminish indigenous peoples’ rights and cultures. Many continue to occupy or struggle for their ancestral lands in order to keep surviving on the basis of ancient principles that are common to many indigenous cultures.<br/><br/> “Such principles invoke the importance of living on Earth with a sense of gratitude, with a posture of reciprocity and respect towards other beings, and with a non-possessive attitude in relation to nature.”<br/><br/> So indigenous peoples have vast experience, specialist skills and science that can help to mitigate the effects of climate change and safeguard our planet’s biodiversity.<br/><br/> And they have become increasingly vocal in presenting their distinct perspectives over the past decade, stepping up to become leaders in the fight against climate change.",

    ]

    const contentText5 = [
	    "Sustainability bingo",
	    "Frontline communities",
	    "Science and traditional knowledge",

    ]

    const contentText6 = [
	    "This is not to say nothing is happening. Significant global resources are being directed towards the sustainable economy and there is a bourgeoning green sector ready to burst forth. Even in China, where emissions are still rising strongly, there is a recognition that new, sustainable technologies and ways of doings things are the future. <br/><br/>On the face of it, everything is moving in the right direction, even if it’s not immediately apparent to scientists, campaigners and leaders from the Global South or indigenous communities.<br/><br/> The sustainable finance market (SFM) was worth more than $4trn last year (2021), hitting its highest ever level just as COP26 opened in Glasgow. So, while COP26 was painted by some as an opportunity missed, it also “brought renewed commitments to mobilise public and private climate finance from governments, and brought together private actors through initiatives like the Glasgow Financial Alliance for Net Zero”.<br/><br/> This is all well and good. One of the greatest growth areas within the SFM, the broadest term for climate and sustainability-related finance, was the increased issuance of sustainable debt in 2021.",
	    'Anne Pisor is assistant professor of anthropology and works with an international team of researchers. Together, they propose a bottom-up approach to climate change adaptation where frontline communities play a leading role in the decision-making process.<br/><br/> Support for the peoples and communities most affected – often rural, poor and indigenous – tends to come in the form of ‘top-down’ actions of governments, their agencies and NGOs.<br/><br/> “Most governments and other organisations involved in addressing climate change prefer to fund initiatives where decisions are made about what to do at a higher level and then these decisions are passed down to local communities, like towns or neighbourhoods, to implement,” said Pisor. <br/><br/>“The issue with this is that what seems like a good strategy to these organisations may not actually work on the ground.”<br/><br/> In the larger field of development, schemes can often be very expensive and loans can come with binding conditions, leaving the ‘recipient countries’ subject to external control.<br/><br/> Donors often prefer to rely on technology and machinery instead of offering jobs to local people. Countries can be saddled with large debts from grandiose financing schemes. Experts at the top conceptualise and plan their solutions and lead the process. They are criticised for providing little opportunity for people’s participation in the total development efforts.<br/><br/> “Living in harmony with nature, indigenous peoples help safeguard 80% of the world’s biodiversity and hold many of the solutions to the climate crisis, despite constituting less than 5% of the global population,” according to the UN Climate Change Executive.<br/><br/> These communities are better placed to lead in choosing their own adaptive strategies. After all, they have been responding to climate change for a very long time already. They are more knowledgeable about what works and where, and are better-suited to design, lead on and implement effective short- and longer-term strategies.',
	    "Indeed, it has become clear that continually positioning their opinions as central to any approaches to climate assessment, mitigation, adaption or governance is imperative.<br/><br/> Indigenous groups’ traditional ecological knowledge (TEK) predates Western science by hundreds, if not thousands of years.<br/><br/> TEK is a science in itself that has been handed down through the generations. It is highly developed and includes an in-depth, expert knowledge about the environment and sustainability. Indeed, it is thought to hold many solutions to today’s climate crisis.<br/><br/> This knowledge encompasses the relationships between people, plants, animals, natural phenomena and landscapes. It regulates the timing of events for activities such as hunting, fishing, trapping, agriculture and forestry.<br/><br/> And it embraces the worldview of a people on ecology and spirituality, as well as human and animal relationships.<br/><br/> Until recently, Western science has discounted TEK science as irrelevant.<br/><br/> Samantha Chisholm Hatfield is an enrolled member of the Confederated Tribes of Siletz Indians, Tutuni Band, which advocates for the integration of different forms of knowledges and sciences.<br/><br/> She said: “Many scholars are, and have been, examining climate change issues from a very pragmatic and logical regimented approach that is rooted in Western scientific dogmas.<br/><br/> “Everything from temperatures to land-base changes, agricultural crops impacted to increased diseases that are being altered from climate change events.<br/><br/> “This logic and pragmatism provides much-needed information, but difficulties arise when data is deficient in areas of human interaction with the environment, and impacts to human cultural issues.”<br/><br/> On their own, it is clear that Western science and belief systems cannot solve humanity’s climate challenges. Instead, we need to invest in solutions which bridge Western scientific approaches and traditional ecological knowledge.<br/><br/> And we need to collaborate and work alongside indigenous peoples and communities on the ground.",

    ]

    const contentText7 = [
	    "Still not enough",
	    "Bottom-up strategies",
	    '',

    ]

    const contentText8 = [
	    "The problem is that this transition is still not happening anywhere near fast enough. The Climate Finance Initiative says the total value of annual climate finance commitments needs to be nearer $5trn by the end of the decade. It’s current around the $632bn mark. <br/><br/>Those figures may sound impressive, but they are still dwarfed by a global economy dependent on fossil fuels and carbon-intensive business models. <br/><br/>That’s partly because of the inertia bourne of vested fossil-fuel interests working to distort both public discourse and the regulatory and funding framework to delay progress. <br/><br/>And, while attention is still focused on the present and immediate past, there remains a lack of institutonal imagination on what the so-called green revolution means and where it might eventually take us.<br/><br/> However, the delay may also be partly due to the climate-finance market’s structure, and that of the much larger sustainability finance market, of which climate finance is a subsection. The truth is, despite the foresight and best intentions of thousands, these markets are not structurally optimised for the purp",
	    "Across the globe, indigenous communities are increasingly engaging in climate action as ‘bottom up’ approaches emphasise and reflect their needs. Through participation in development initiatives, they can select their own goals and the means of achieving them, managing any risks and adapting or replacing solutions which are not working well. <br/><br/>‘Bottom up’ schemes ensure local ownership, accountability and commitment to the development process. Aid is directed towards sustainable adaption practices, applying the most appropriate technologies to the poorest communities.<br/><br/> Schemes are planned by and for local communities, who can then develop the education, skills and experiences to support further initiatives. <br/><br/>Such schemes often use technology that local people can use, or learn to use and maintain. These are often smaller, less expensive and more sustainable, primarily because they come with a far smaller environmental footprint.",
	    '',

    ]

    const contentText9 = [
	    "Lack of access",
	    "Voices",
	    '',

    ]
    const contentText10 = [
	    "Sticking specifically with climate finance just for the moment, market access is a major constraint. Think about it: any small or medium-sized investor who wants to make a difference can do one or more things. <br/><br/>Firstly, they can donate to one or more non-governmental organisations, mainly charities, that work in the field. Make no mistake, NGOs are doing absolutely essential work and possess enormous expertise on their specific communities and the climate impacts which are already happening. Their work, within an international framework that tends towards sticking-plaster activities, is essential. But they’re still sticking-plaster solutions nonetheless.<br/><br/> Secondly, they can invest in a company or project engaged in some form of sustainability work. This would usually be a project, company or venture they either already knew about or have discovered as part of their research or due diligence.<br/><br/> Or, thirdly and more likely, they can choose to invest their money in one or more of a range of funds and financial products which set ethical and/or environmental sustainability as an investment criteria, possibly on the recommendation of a financial advisor. <br/><br/>But, in a world where climate events will increasingly impact on governments, corporations, SMEs, households and individuals – and, consequently, their mindshare – this market intermediated structure ensures there is a psychological gap between the investor and their ability to deliver on their chosen priorities.<br/><br/> Direct access to the global market is comparatively limited, with investors relying on the intermediaries of a legacy financial system and the major players within it, many of which see environment, social and governance (ESG) finance as simply one portfolio among a litany of other, often fossil-fuel-dominated investments.<br/><br/> If anyone wanted to disempower the wider investment community in the face of an on-coming climate-driven economic catastrophe, this indirect, intermediated, ‘unit-trust incrementalism’ is precisely the way to achieve it. <br/><br/>But this structure will almost certainly fail to meet the rising demand from investors in a climate-changed future, let alone rise to the climate challenges we already face today.",
	    "With climate change the poorest and most vulnerable people will be most affected and adaptation strategies need to be put in place now to manage existing impacts. Adaption will be increasingly vital as the world warms further.<br/><br/> It is time to raise the voices of frontline communities and open a dialogue around how to mitigate the impacts. Workable solutions must come from the ‘bottom’ ‘upwards’ and be transformational. They cannot continue to be piecemeal and driven by eternal experts alone.",
	    '',

    ]

    const contentText11 = [
	    "Dynamic and decentralised",
	    "The Osira model",
	    '',

    ]

    const contentText12 = [
	    "Crypto is capable of changing all this. Through an online governance platform, such as that proposed by the Osira Network, it can enable a widening of the number and range of supportable projects, whether via donations and grants, loans or investments. <br/><br/>It can also open the market to the full range of investors large and small – aided by expertise of scientists, ESG experts, NGOs, as well as those on the ground, and enable a more consistent and reliable collection of data through blockchain-based oracles.<br/><br/> In this way, crypto Osira-style can disintermediate the gatekeepers that currently sit between the investors and the invested, creating a much more immediate and responsive direct connection between the two.<br/><br/> Acheiving this is one of Osira’s main aims. Because, as time passes and the roll-call of super typhoons, hurricanes, floods and biblical heat and drought impacts on ever more people lengthens, the demand for the financing of change will become unstoppable.<br/><br/> And crypto will inevitably be at the forefront of that movement.",
	    "Our model proposes to attempt to do just this by bringing together a global network of experts, alongside investors and affected communities, to raise the key issues and solutions to the climate crisis. <br/><br/>Here, parties will be encouraged to come together and support those who work with frontline communities, enabling them to choose their own adaptive responses. This is the ‘bottom-up’ meets ‘top-down’ model. <br/><br/>The Osira team is in the process of establishing a network of relevant experts and indigenous peoples to support and participate in this process.<br/><br/> It is clear we need to work together towards transformative solutions, and not simply band aid solutions or ones that deal with climate matters in a ‘top-down’ fashion. <br/><br/>What we need are solutions which seek to raise the voices and participation of frontline communities in bringing about positive and sustainable transformation in the way we address and respond to climate change. Solutions which stand the test of time, weather the storms of the climate crisis and mitigate its effects.",
	    '',

    ]

    const contentText13 = [
	    '',
	    "Donors",
	    '',

    ]

    const contentText14 = [
	    '',
	    "In the larger field of development, schemes can often be very expensive and loans can come with binding conditions, leaving the ‘recipient countries’ subject to external control. <br/><br/>Donors often prefer to rely on technology and machinery instead of offering jobs to local people. Countries can be saddled with large debts from grandiose financing schemes. Experts at the top conceptualise and plan their solutions and lead the process. They are criticised for providing little opportunity for people’s participation in the total development efforts.<br/><br/> “Living in harmony with nature, indigenous peoples help safeguard 80% of the world’s biodiversity and hold many of the solutions to the climate crisis, despite constituting less than 5% of the global population,” according to the UN Climate Change Executive.<br/><br/> These communities are better placed to lead in choosing their own adaptive strategies. After all, they have been responding to climate change for a very long time already. They are more knowledgeable about what works and where, and are better-suited to design, lead on and implement effective short- and longer-term strategies.",
	    '',

    ]

    const contentText15 = [
	    '',
	    "Bottom-up strategies",
	    '',

    ]

    const contentText16 = [
	    '',
	    "Across the globe, indigenous communities are increasingly engaging in climate action as ‘bottom up’ approaches emphasise and reflect their needs. Through participation in development initiatives, they can select their own goals and the means of achieving them, managing any risks and adapting or replacing solutions which are not working well. <br/><br/>‘Bottom up’ schemes ensure local ownership, accountability and commitment to the development process. Aid is directed towards sustainable adaption practices, applying the most appropriate technologies to the poorest communities. <br/><br/>Schemes are planned by and for local communities, who can then develop the education, skills and experiences to support further initiatives.<br/><br/> Such schemes often use technology that local people can use, or learn to use and maintain. These are often smaller, less expensive and more sustainable, primarily because they come with a far smaller environmental footprint.<br/><br/> With climate change the poorest and most vulnerable people will be most affected and adaptation strategies need to be put in place now to manage existing impacts. Adaption will be increasingly vital as the world warms further.<br/><br/> It is time to raise the voices of frontline communities and open a dialogue around how to mitigate the impacts. Workable solutions must come from the ‘bottom’ ‘upwards’ and be transformational. They cannot continue to be piecemeal and driven by eternal experts alone.",
	    '',

    ]
    const catArr = [
        'Category xyz',
        'Category xyz',
        'Category xyz'
    ]

    const contentDate = [
        '5 October 2022',
        '8 September 2022',
        '4 October 2022'
    ]

    const imageArray=[
	    Climate,
	    Fire,
	    Sustainability 
    ]

    return (
        <div className="blogViewContainer">
            <div className="blogViewBox">
                <div className="contentBox">
                    <h5 className="h5_blog_class_1 h5-cat">{catArr[params.id]}</h5>
                    
	            <Image src={imageArray[params.id]} className={"blogViewImage img-fluid"} alt={"Stone"}  priority={true}/>
                    <h5 className="h4_blog_class_1 p-cat_1">{parse(titleArr[params.id])}</h5>
                    
	    	        <p className="h5_blog_class_1 p-cat_1"> {contentText1[params.id]}</p>
                    <p className="p_blog_class_1"> {parse(contentText2[params.id])} </p>
                    <p className="h5_blog_class_1 p-cat_1"> {contentText3[params.id]} </p>
                    <p className="p_blog_class_1"> {parse(contentText4[params.id])} </p>
                    <p className="h5_blog_class_1 p-cat_1"> {contentText5[params.id]} </p>
                    <p className="p_blog_class_1"> {parse(contentText6[params.id])} </p>
                    <p className="h5_blog_class_1 p-cat_1"> {contentText7[params.id]} </p>
                    <p className="p_blog_class_1"> {parse(contentText8[params.id])} </p>
                    <p className="h5_blog_class_1 p-cat_1"> {contentText9[params.id]} </p>
                    <p className="p_blog_class_1"> {parse(contentText10[params.id])} </p>
                    <p className="h5_blog_class_1 p-cat_1"> {contentText11[params.id]} </p>
                    <p className="p_blog_class_1"> {parse(contentText12[params.id])} </p>
                    <p className="h5_blog_class_1 p-cat_1"> {contentText13[params.id]} </p>
                    <p className="p_blog_class_1"> {parse(contentText14[params.id])} </p>
                    <p className="h5_blog_class_1 p-cat_1"> {contentText15[params.id]} </p>
                    <p className="p_blog_class_1"> {parse(contentText16[params.id])} </p>

                    <p className="author-name">Author name here</p>
                    
	            <p className="p_blog_class_1">{contentDate[params.id]}</p>
                </div>
            </div>
        </div>

    );
};


export default BlogView;

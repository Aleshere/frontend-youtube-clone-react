import React from 'react'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'

import './SearchPage.css'

function SearchPage() {
    return (
        <div className='searchPage' >
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr/>

            <ChannelRow
                image='https://yt3.ggpht.com/a/AATXAJxYAYKB02svZ_SAnGhTlFbgs5kHVMRdAXEAQ88Xdg=s176-c-k-c0x00ffffff-no-rj'
                channel='Honeypot'
                verified
                subs='68k'
                noOfVideos={382}
                description='Welcome to honeypot.io’s official YouTube channel. We produce monthly documentaries exploring tech culture, influential technologies and untold developer stories from around the world. Check out the home for untold developer stories around open source, careers and all the other cool stuff developers are doing at cult.honeypot.io.'
            />

            <hr/>

            <VideoRow
                views='10k'
                subs='51k'
                description='Angular is very popular for large applications, often powering some of the biggest companies in the world. Stephen works with hundreds of these companies and will share the top challenges, best practices, and the top things many enterprises have figured out about Angular.'
                timestamp='2 May 2019'
                channel='ng-conf'
                title='Angular For Enterprise | Stephen Fluin'
                image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fc%2Fcf%2FAngular_full_color_logo.svg%2F1200px-Angular_full_color_logo.svg.png&f=1&nofb=1'
            />

<VideoRow
                views='10k'
                subs='51k'
                description='Angular is very popular for large applications, often powering some of the biggest companies in the world. Stephen works with hundreds of these companies and will share the top challenges, best practices, and the top things many enterprises have figured out about Angular.'
                timestamp='2 May 2019'
                channel='ng-conf'
                title='Angular For Enterprise | Stephen Fluin'
                image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fc%2Fcf%2FAngular_full_color_logo.svg%2F1200px-Angular_full_color_logo.svg.png&f=1&nofb=1'
            />

<VideoRow
                views='10k'
                subs='51k'
                description='Angular is very popular for large applications, often powering some of the biggest companies in the world. Stephen works with hundreds of these companies and will share the top challenges, best practices, and the top things many enterprises have figured out about Angular.'
                timestamp='2 May 2019'
                channel='ng-conf'
                title='Angular For Enterprise | Stephen Fluin'
                image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fc%2Fcf%2FAngular_full_color_logo.svg%2F1200px-Angular_full_color_logo.svg.png&f=1&nofb=1'
            />

        </div>
    )
}

export default SearchPage

import React from 'react'
import { Box, Typography, Button, Divider, Avatar, AvatarGroup, Link } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import './HomeBody.css';
import logo from '../../logo.png';
import logoInner from '../../logo-inner.png';



const HomeBody = () => {

    // useEffect(() => {
    //     axios.get('https://graph.facebook.com/USER-ID?fields=id,name,email,picture&access_token=ACCESS-TOKEN')
    //         .then(response => setTotalReactPackages(response.data.total));

    // }, []);

    return (<>
        <div>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    p: 1,
                    m: 1,
                    bgcolor: 'background.paper',
                }}
            >
                <header className="App-header" >
                    <img src={logo} className="App-logo" alt="logo" />
                    <img src={logoInner} className="logoInner" alt="logo" />
                </header>
                <Typography paragraph sx={{
                    p: 3
                }}>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                    eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                    neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                    tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                    sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                    tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                    gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                    et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                    tristique sollicitudin nibh sit.
                    <Button size="small">Read More</Button>
                </Typography>
            </Box>
            <Divider />
            <Box component="main" sx={{
                display: 'flex',
                flexDirection: 'row',
                p: 2,
                bgcolor: 'background.paper',
            }}>
                <Box sx={{ flexGrow: 1, p: 3, }}>

                    <Typography paragraph >
                        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                        eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                        neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                        tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                        sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                        tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                        gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                        et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                        tristique sollicitudin nibh sit.
                        <Link href="#foo">
                            Read more
                            {/* always visually hidden because the parent is focusable element */}
                            <Box sx={visuallyHidden}>about how to visually hide elements</Box>
                        </Link>
                    </Typography>

                    <Typography paragraph >
                        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                        eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                        neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                        tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                        sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                        tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                        gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                        et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                        tristique sollicitudin nibh sit.
                        <Button size="small">Read More</Button>
                    </Typography>

                    <Typography paragraph >
                        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                        eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                        neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                        tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                        sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                        tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                        gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                        et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                        tristique sollicitudin nibh sit.
                        <Button size="small">Read More</Button>
                    </Typography>
                </Box>
                <Box>



                    <Box sx={{
                        p: 2,
                    }}>
                        <Typography variant="button" display="block" gutterBottom>
                            Youtube
                        </Typography>

                        <div class="g-ytsubscribe" data-channelid="UCmP8Qz2yEiagbMhhDEqEVfQ" data-layout="full" data-count="default"></div>
                    </Box>
                    <Divider />

                    <Box sx={{
                        p: 2,
                    }}>
                        <Typography variant="button" display="block" gutterBottom>
                            Facebook
                        </Typography>
                        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FIndianPeopleSocialServicework%2F&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId" width="340" height="500" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    </Box>
                    <Divider />

                    <Box sx={{
                        p: 2,
                    }}>
                        <Typography variant="button" display="block" gutterBottom>
                            Twitter
                        </Typography>
                        <a href="https://twitter.com/bmssm2021?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @ipssc2021</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                    </Box>
                    <Divider />

                    <Box sx={{
                        p: 2,
                    }}>
                        <Typography variant="button" display="block" gutterBottom>
                            birthday buddies
                        </Typography>
                        <AvatarGroup max={4}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                        </AvatarGroup>
                    </Box>
                    <Divider />

                </Box>



            </Box>

        </div>
    </>)

}

export default HomeBody
const NodeMediaServer = require('node-media-server');

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    mediaroot: './media',
    allow_origin: '*'
  },
  trans: {
    ffmpeg: 'E:/Workspace/Angular/Lat/servidor-rtmp/ffmpeg-6.0-essentials_build/bin/ffmpeg.exe', //Ruta en mi PC, hay que cambiarla
    tasks: [
      {
        app: 'live',
        hls: true,
        hlsFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]',
        hlsKeep: false, // to prevent hls file delete after end the stream ( Lo pongo en false para que no ocupar memoria )
        dash: true,
        dashFlags: '[f=dash:window_size=3:extra_window_size=5]',
        dashKeep: false // to prevent dash file delete after end the stream ( Lo pongo en false para que no ocupar memoria )
      }
    ]
  }
};

var nms = new NodeMediaServer(config)
nms.run();

import { fs } from 'memfs'
import path from 'path'

// eslint-disable-next-line no-undef
export async function getDirContent (dirName) {
    console.log(fs)
    return new Promise((resolve, reject) => {
        fs.readdir('/', (err, filenames) => {
            if (err) reject(err)

            // for (let filename of filenames) {
                console.log(filenames)
            // }
            resolve(true)
        })
    })
}

export async function isFolder(dirName) {
    return new Promise((resolve, reject) => {
        fs.lstat(dirName, (err, stat) => {
            if (err) reject(err)

            resolve(stat.isDirectory())

        })
    })
}
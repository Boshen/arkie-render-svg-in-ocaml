import 'isomorphic-fetch'
import test from 'ava'
import { renderSvg } from '../lib/main'

import tree1 from './tree1.json'
import tree2 from './tree2.json'

/*
 * 使用 www 数据执行 snapshots
 * 打开一个模板，然后复制 tree, 执行 snapshot
 */
const tests = [tree1, tree2]

tests.forEach((tree, i) => {
  test(`${i}: ${tree.id}`, async t => {
    const svg = await renderSvg(tree, { fonts: false })
    t.snapshot(svg, { id: tree.id })
  })
})

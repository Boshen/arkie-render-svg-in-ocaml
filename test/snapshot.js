import test from 'ava'
import { renderSvg } from '../src/main.bs'

import tree1 from './tree1.json'
import tree2 from './tree2.json'

/*
 * 使用 www 数据执行 snapshots
 */

const tests = [tree1, tree2]

tests.forEach((tree, i) => {
  test(`${i}: ${tree.originId}`, async t => {
    const svg = await renderSvg(tree, { fonts: false })
    t.snapshot(svg, { id: tree.originId })
  })
})

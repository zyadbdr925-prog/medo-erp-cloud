let tableHtml = "";
  if (documentType === "INVOICE" && documentData.items) {
    tableHtml = `
      <table style="width:100%; table-layout:fixed; border-collapse:collapse; margin-top:16px; font-size:11px; text-align:right; border:1px solid #CBD5E1; background-color:#FFFFFF;">
        <colgroup>
          <col style="width: 5%;" />
          <col style="width: 40%;" />
          <col style="width: 12%;" />
          <col style="width: 20%;" />
          <col style="width: 23%;" />
        </colgroup>
        <thead>
          <tr style="background-color:#F8FAFC; color:#0A2540;">
            <th style="padding:6px 8px; border:1px solid #CBD5E1; text-align:center; font-weight:700; font-size:12px; color:#0A2540; overflow:hidden; word-break:break-word;">#</th>
            <th style="padding:6px 8px; border:1px solid #CBD5E1; font-weight:700; font-size:12px; color:#0A2540; overflow:hidden; word-break:break-word;">بيان الصنف / الخدمة</th>
            <th style="padding:6px 8px; border:1px solid #CBD5E1; text-align:left; font-weight:700; font-size:12px; color:#0A2540; overflow:hidden; word-break:break-word;">الكمية</th>
            <th style="padding:6px 8px; border:1px solid #CBD5E1; text-align:left; font-weight:700; font-size:12px; color:#0A2540; overflow:hidden; word-break:break-word;">سعر الوحدة</th>
            <th style="padding:6px 8px; border:1px solid #CBD5E1; text-align:left; font-weight:700; font-size:12px; color:#0A2540; overflow:hidden; word-break:break-word;">الإجمالي</th>
          </tr>
        </thead>
        <tbody>
          ${documentData.items
            .map(
              (item: any, idx: number) => `
            <tr style="background-color:${idx % 2 === 1 ? "#F8FAFC" : "#FFFFFF"};">
              <td style="padding:6px 8px; border:1px solid #CBD5E1; text-align:center; font-family:monospace; color:#1A2B4C; font-size:11px; font-weight:700; overflow:hidden; word-break:break-word;">${idx + 1}</td>
              <td style="padding:6px 8px; border:1px solid #CBD5E1; color:#1A2B4C; font-size:11px; font-weight:700; overflow:hidden; word-break:break-word;">${item.description || item.itemName}</td>
              <td style="padding:6px 8px; border:1px solid #CBD5E1; text-align:left; font-family:monospace; color:#1A2B4C; font-size:11px; font-weight:700; overflow:hidden; word-break:break-word;">${item.quantity} ${item.unit || ""}</td>
              <td style="padding:6px 8px; border:1px solid #CBD5E1; text-align:left; font-family:monospace; color:#1A2B4C; font-size:11px; font-weight:700; overflow:hidden; word-break:break-word;">${formatNumberOnly(item.unitPrice)}</td>
              <td style="padding:6px 8px; border:1px solid #CBD5E1; text-align:left; font-family:monospace; font-weight:700; color:#1A2B4C; font-size:11px; overflow:hidden; word-break:break-word;">${formatNumberOnly(item.total)}</td>
            </tr>
          `
            )
            .join("")}
        </tbody>
        <tfoot>
          <tr style="background-color:#F1F5F9; font-weight:700;">
            <td colspan="4" style="padding:6px 8px; border:1px solid #CBD5E1; color:#0A2540; font-size:12px; overflow:hidden; word-break:break-word;">الإجمالي العام:</td>
            <td style="padding:6px 8px; border:1px solid #CBD5E1; text-align:left; font-family:monospace; color:#0A2540; font-size:12px; font-weight:700; overflow:hidden; word-break:break-word;">
              ${formatMoney(documentData.totalAmount || documentData.grandTotal, documentData.currency, currencies)}
            </td>
          </tr>
        </tfoot>
      </table>
    `;
  }
